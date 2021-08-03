import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 0;
  height: 68px;
  background: #fff;
  padding: 0 20px 0px;

  .searchBarContainer{
    text-align: center;
    height: 40px;
  border-radius: 35px;
  max-width: 500px;
  width: 500px;
  border: 1px solid #ddd;

  }

  img {
    height: 140px;
    width: 130px;
  }

  a {
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      color: #ffff;
      font-size: 16px;
    }
  }

  @media (max-width: 496px) {
    img {
    height: 35px;
    width: 90px;
    }
    }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  text-align: center;
  margin-right: 10px;

    span {
      font-size: 15px;
      color: #999;
      margin-left: 8px;
      margin: 20px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: #000;
        font-size: 16px;
      }
    }

    @media (max-width: 496px) {
      visibility: hidden;
      width: 0%;
      height: 0%;
    }
`;

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  div {
    text-align: right;
    margin-right: 10px;

  }

  .login {
    border: solid #fff 2px;
    padding: 4px;
    border-radius: 8px;
    margin-right: 30px;

    &:hover {
      background: #f2f2f2;
      color: #303030;
      font-size: 15px;
    }
  }

  span {
      font-size: 15px;
      color: #999;
      margin-left: 10px;
      margin-right: 10px;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        color: #ffff;
        font-size: 15px;
      }
    }

    @media (max-width: 496px) {
      .login {
        font-size: 12px;
      }
    }

`;


