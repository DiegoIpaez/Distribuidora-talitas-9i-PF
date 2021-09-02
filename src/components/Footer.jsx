import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container pt-5 pb-5 text-white text-center">
        <div className="row">
          <div className="col-4">
            <h5>
              Podes contactarnos en <Link to="/contact">TresAcordes</Link>{" "}
            </h5>
          </div>
          <div className="col-4">
            <h5>
              Para saber mas de nosotros puedes ir aqui:{" "}
              <Link to="/about">TresAcordes</Link>{" "}
            </h5>
          </div>
          <div className="col-4">
            <h5>
              Sin sentido <Link to="/sdfsdf">error</Link>{" "}
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
