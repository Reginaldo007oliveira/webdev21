import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { MdLocalGroceryStore } from "react-icons/md";

import logo from "../../assets/images/logo.png";
import { Container, Cart } from "./styles";
import { useCart } from "../../hooks/useCart";

const Header = (): JSX.Element => {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Core Biz" />
      </Link>

      <S.Info>
        <input type="text" className="searchBarContainer" />
        <span className="login">Pesquisar </span>

        {/* <Link to="/">
          <span> Início </span>
        </Link>
        <Link to="/">
          <span> Sobre </span>
        </Link>
        <Link to="/">
          <span> Contato </span>
        </Link> */}
      </S.Info>

      <Cart to="/cart">
        <Link to="/login">
          {/* <span className="login"> Cadastre-se </span> */}
        </Link>
        <MdLocalGroceryStore size={26} color="#0c0c0c" />
        <div>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
      </Cart>
    </Container>
  );
};

export default Header;
