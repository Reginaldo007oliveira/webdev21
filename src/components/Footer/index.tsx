import React from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";

const Footer = (): JSX.Element => {
  return (
    <S.Footer>
      <a target="_blank" href="https://github.com/reginaldo007oliveira">
        <footer>
          <div className="wrapper footer-box">
            <div className="sec_rod">
              <div className="company-footer">
                <h1>Localização</h1>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
              </div>
            </div>

            <div className="sec_rod">
              <div className="company-footer">
                <img
                  className="bannerContato"
                  src="https://atacadoweb.vteximg.com.br/arquivos/contato.png"
                  alt="vtex"
                />

                {/* <img src="../../assets/images/contato.png" /> */}
              </div>
            </div>

            <div className="sec_rod">
              <div className="company-footer">
                <img
                  className="bannerCoreVtex"
                  src=" https://atacadoweb.vteximg.com.br/arquivos/corebizEvtex.png"
                  alt="vtex"
                />
              </div>
            </div>
          </div>
        </footer>
        {/* <div className="footerNav">
            <div>
              Localização
              <div>Avenida Andrômeda, 2000. Bloco 6 e 8</div>
              <div>Alphaville SP</div>
              <div>brasil@corebiz.ag</div>
              <div>+55 11 3090 1039</div>
            </div>

            <div>
              Localização
              <div>Avenida Andrômeda, 2000. Bloco 6 e 8</div>
              <div>Alphaville SP</div>
              <div>brasil@corebiz.ag</div>
              <div>+55 11 3090 1039</div>
            </div>
          </div> */}
      </a>
    </S.Footer>
  );
};

export default Footer;
