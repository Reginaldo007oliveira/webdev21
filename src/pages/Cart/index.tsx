import React from "react";
import { Link } from "react-router-dom";
import {
  MdDelete,
  MdAddCircleOutline,
  MdRemoveCircleOutline,
} from "react-icons/md";

import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";
import { Container, ProductTable, Total } from "./styles";

interface Product {
  id: number;
  productName: string;
  price: number;
  imageUrl: string;
  amount: number;
}

const Cart = (): JSX.Element => {
  const { cart, removeProduct, updateProductAmount } = useCart();

  const cartFormatted = cart.map((product) => {
    return {
      id: product.id,
      productName: product.productName,
      price: product.price,
      imageUrl: product.imageUrl,
      amount: product.amount,
      subtotal: product.amount * product.price,
      priceFormatted: formatPrice(product.price),
    };
  });

  const total = formatPrice(
    cartFormatted.reduce((sumTotal, product) => {
      return (sumTotal += product.subtotal);
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    let handleIncrement = product.amount + 1;
    updateProductAmount({ productId: product.id, amount: handleIncrement });
  }

  function handleProductDecrement(product: Product) {
    let handleDecrement = product.amount - 1;
    updateProductAmount({ productId: product.id, amount: handleDecrement });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th aria-label="product image" />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete icon" />
          </tr>
        </thead>

        <tbody>
          {cartFormatted.map((product) => (
            <tr data-testid="product" key={product.id}>
              <td>
                <img src={product.imageUrl} alt={product.productName} />
              </td>
              <td>
                <strong>{product.productName}</strong>
                <span>{formatPrice(product.price)}</span>
              </td>
              <td>
                <div>
                  <button
                    type="button"
                    data-testid="decrement-product"
                    disabled={product.amount <= 1}
                    onClick={() => handleProductDecrement(product)}
                  >
                    <MdRemoveCircleOutline size={20} />
                  </button>
                  <input
                    type="text"
                    data-testid="product-amount"
                    readOnly
                    value={product.amount}
                  />
                  <button
                    type="button"
                    data-testid="increment-product"
                    onClick={() => handleProductIncrement(product)}
                  >
                    <MdAddCircleOutline size={20} />
                  </button>
                </div>
              </td>
              <td>
                <strong>{formatPrice(product.subtotal)}</strong>
              </td>
              <td>
                <button
                  type="button"
                  data-testid="remove-product"
                  onClick={() => handleRemoveProduct(product.id)}
                >
                  <MdDelete size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <Link to="/">
          <button
            onClick={() => alert("Espero que tenha gostado da aplicação!")}
            type="button"
          >
            Finalizar pedido
          </button>
        </Link>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  );
};

export default Cart;
