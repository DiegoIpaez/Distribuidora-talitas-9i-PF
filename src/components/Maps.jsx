import React from "react";

const Maps = () => {
  return (
    <div className="container box-map mt-4 mb-5">
      <div className="row">
        <h3 className="texto-fuente py-2 mt-1">
          <b>Distribuidora las Talitas</b>
        </h3>
        <p className="texto-fuente">
          Envíanos tu solicitud si estas interesado trabajar con nosotros. Si
          tienes alguna duda, quejas o reclamos, llenando el siguiente
          formulario te lo resolveremos a la brevedad. Deja tus datos asi nos
          pondremos en contacto contigo. También, nos puedes contactar através
          del télefono <b>+54(381) 5041338</b> , al correo electrónico:{" "}
          <b>info@distribuidoraTalitas.com</b> o visitandonos en...
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14247.61453050135!2d-65.1828346!3d-26.7793416!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xddc8638e21e7c7a3!2sDistribuidora%20Las%20Talitas!5e0!3m2!1ses!2sar!4v1628701515880!5m2!1ses!2sar"
          className="Maps mb-2"
          title="Distribuidora las Talitas"
          id="MapaDis"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
