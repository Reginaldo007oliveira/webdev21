import React, { useState, useEffect } from "react";

import { ProductList } from "./styles";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";

interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Home = (): JSX.Element => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumProduct, product) => {
    return { ...sumProduct, [product.id]: product.amount };
  }, {} as CartItemsAmount);

  useEffect(() => {
    async function loadProducts() {
      const products = (await api.get("products")).data;

      let product = products.map((item: ProductFormatted) => {
        return {
          id: item.id,
          productName: item.productName,
          price: item.price,
          imageUrl: item.imageUrl,
          priceFormatted: formatPrice(item.price),
        };
      });

      setProducts(product);
    }
    loadProducts();
  }, []);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  return (
    <>
      <section>
        <div>
          <img
            className="banner"
            src="https://atacadoweb.vteximg.com.br/arquivos/Bannernix.jpg"
            alt="vtex"
            width="100%"
            height="100%"
          />
        </div>
      </section>
      <section>
        <ProductList>
          {products.map((product) => (
            <li key={product.id}>
              <img
                src={product.imageUrl}
                alt="Tênis de Caminhada Leve Confortável"
              />
              <strong>{product.productName}</strong>
              <span>{product.priceFormatted}</span>
              <button
                type="button"
                data-testid="add-product-button"
                onClick={() => handleAddProduct(product.id)}
              >
                <div data-testid="cart-product-quantity">
                  {cartItemsAmount[product.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </li>
          ))}
        </ProductList>
      </section>
    </>
  );
};

export default Home;
