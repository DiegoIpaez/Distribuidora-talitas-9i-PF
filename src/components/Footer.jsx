import React from "react";
import { Link } from "react-router-dom";
import NavLogo from "../assets/img/NavLogo.png";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5 pb-5 text-black text-center">
        {/* Seccion redes */}

        <div className="row">
          <div className="col-6">
            <div>
              <h4>LOS RAPAS - GRUPO 1</h4>
            </div>

            <div>
              <img src={NavLogo} className="logo-nav mt-4" alt="" />
            </div>

            <div className="mt-4"></div>

            <div className="mt-4">
              <i className="fa fa-mobile" aria-hidden="true"></i>
              <strong>Teléfono: +54 381 504-5252</strong>
            </div>

            <div className="mt-4">
              <i className="fa fa-envelope" aria-hidden="true"></i>
              <strong>Email: distribuidoralastalitas@gmail.com</strong>
            </div>
          </div>
          <div className="col-6">
            <h4>ENLACES IMPORTANTES </h4>
            <div className=" mt-4">
              <Link className="footer-enl" to="/about">
                Sobre Nosotros
              </Link>
            </div>
            <div className="footer-enl mt-4">
              <Link className="footer-enl" to="#">
                Contacto
              </Link>{" "}
            </div>
            <div className="mt-4">
              <Link className="footer-enl" to="#">
                Temino y condiciones
              </Link>{" "}
            </div>
            <div className="mt-4">
              <Link className="footer-enl" to="#">
                Políticas y Privacidad
              </Link>{" "}
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <span>
            <strong>
              Copyright 2021 :derechos_de_autor: GRUPOROLLING S.A.
              CUIL:30-20202020-2 Todos los derechos reservados
            </strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
