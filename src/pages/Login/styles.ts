import styled from 'styled-components';

export const Login = styled.ul`
  margin: 35px;

.email-form {
  background: #303030;
  border: #ffffff solid 3px;
  border-radius: 10px;
  padding: 15px;
  max-width: 60%;
  margin: 0 auto;
}

.email-form input[type="text"],
.email-form input[type="email"], .email-form input[type="number"] {
  width: 100%;
  outline: none;
  box-sizing: border-box;
  margin: 10px 0px;
  border-radius: 200px;
  border: 0px;
  padding: 8px 10px;
  box-shadow: inset 0px 1px 4px rgba(0, 0, 0.55);
}

.email-form input[type="submit"] {
  width: 80%;
  margin: 10px auto 10px auto;
  display: block;
  background: #ffffff;
  border: none;
  padding: 10px 0px;
  cursor: pointer;
  border-radius: 200px;
  color: #2c2c2c;
  transition: 0.3s;
}

.email-form input[type="submit"]:hover {
  background-color: #00FF00;
  color: #ffffff;
  transform: scale(1.1);
}

.email-form label {
  display: block;
}

.agreed {
  color: #ffffff;
  padding: 8px;
  font-size: 14px;
}


@media (max-width: 496px) {

  margin: 15px 0px 0px 0px;

.email-form {
  width: 100%;
  margin: 0 auto;
}


}

`