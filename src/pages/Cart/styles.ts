import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      background: #303030;
      color: #fff;
      border: 0;
      border-radius: 4px;
      padding: 12px 20px;
      font-weight: bold;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    padding: 6px;
    width: 50px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    svg {
      color: #303030;
      transition: color 0.2s;
    }

    &:hover {
      svg {
        opacity: 0.9;
      }
    }

    &:disabled {
      svg {
        opacity: 0.9;
        cursor: not-allowed;
      }
    }
  }

  
  @media (max-width: 496px) {
    img {
    height: 0px;
    }
    thead th {
    color: #999;
    text-align: left;
    padding: 2px;
    }

    tbody td {
    padding: 0px;
    border-bottom: 1px solid #eee;
    }
    
    tr {
      margin: 100px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
    font-weight: bold;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }

  @media (max-width: 496px) {
    span {
      margin-left: 10px;
    }
  }
`;
