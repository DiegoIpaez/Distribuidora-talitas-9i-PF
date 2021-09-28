import React from "react";
import { Link } from "react-router-dom";

import NavLogo from "../assets/img/NavLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-4 pb-3 text-black text-center">
        {/* Seccion redes */}

        <div className="row">
          {/* Grupo y imagen */}
          <div className="col-4 text-white">
            <div>
              <h6>TeamOne - Los Rapas</h6>
            </div>

            <div>
              <img src={NavLogo} className="logo-nav mt-2 mb-1" alt="" />
            </div>

            <div className="mt-3 footer-enl">
              <i className="fa fa-mobile text-white" aria-hidden="true"></i>
              <span> +54 381 504-5252</span>
            </div>

            <div className="mt-2 footer-enl">
              <i className="fa fa-envelope text-white" aria-hidden="true"></i>
              <span> distribuidoralastalitas@gmail.com</span>
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="col-4 text-white">
            <h6>Redes Sociales</h6>
            <div className="mt-3">
              <h2>
                <i className="fab fa-facebook-square"></i>
              </h2>
              <h2>
                <i className="fab fa-instagram-square"></i>
              </h2>
              <h2>
              <i className="fab fa-twitter-square"></i>
              </h2>
            </div>
          </div>

          {/* Enlaces Importantes */}
          <div className="col-4 text-white">
            <h6>Enlaces Importantes</h6>
            <div className=" mt-3">
              <Link className="footer-enl" to="/sobre">
                Sobre Nosotros
              </Link>
            </div>
            <div className="footer-enl mt-3">
              <Link className="footer-enl" to="/contact">
                Contacto
              </Link>{" "}
            </div>
            <div className="mt-3">
              <Link className="footer-enl" to="/sobre">
                Temino y condiciones
              </Link>{" "}
            </div>
            <div className="mt-3">
              <Link className="footer-enl" to="/sobre">
                Políticas y Privacidad
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="row mt-5 footer-enl text-white">
          <span>
            ©Copyright 2021 :derechos_de_autor: GRUPOROLLING S.A.
            CUIL:30-20202020-2 Todos los derechos reservados
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
