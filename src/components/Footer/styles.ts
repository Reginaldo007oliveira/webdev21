import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Footer = styled.footer`
  display: flex;
  padding: 20px 60px;
  background: #000;
  /* position: fixed; */
  justify-content: center;
  align-items:center;
  bottom: 0;
  width: 100%;
  left: 0;
  right: 0;

  a {
    text-decoration: none;
  }

  span {
    color: #fff;
    margin-right: 20px;
    transition: 0.3s;

    &:hover {
      font-size: 15px;
    }
  }

  footer{
  
   background-color: #000;
   padding-top: 5em;
   padding-bottom: 40px;
   border-top: 5px solid #fff;
  
  }
  footer h1, footer p, footer a, footer span{
    display: flex;
    justify-content:center;
    color: #fff;
  }
  .footer-box{
    display: flex;
    width:78%;
    padding:2%
    }


    .wrapper{
      display: flex;
     
      
    }

    .bannerContato{
      width:239px;
      height:137px
    }

    .bannerCoreVtex{
      width:255px;
      height:84px
    }
    .sec_rod{
      display: flex;
   
      margin-left: 44px;
   
      /* border:1px solid #fff; */
    }
 
`;
