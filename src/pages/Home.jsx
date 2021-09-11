import React, { useEffect, useState } from "react";
import { getProductos } from "../helpers/productos";
import Carrusel from "../components/Carrusel";
import CardProducto from "../components/CardProducto";
import BtnPaginacion from "../components/BtnPaginacion";

const Home = () => {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [totPag, setTotPag] = useState(0);

  useEffect(() => {
    getProductos().then((respuesta) => {
      setProductos(respuesta.productos);
      setTotPag(respuesta.Total);
    });
  }, []);

  useEffect(() => {
    getProductos(pagina).then((respuesta) => {
      setProductos(respuesta.productos);
    });
  }, [pagina]);

  return (
    <div className="container mt-4">
      <div className="row">
        <Carrusel />
      </div>
      <div className="container mt-5">
        <div>
          <h2 className="text-center text-white pt-3 pb-3 productosDestacados">
            ¡Productos destacados!
          </h2>
        </div>
        <CardProducto productos={productos} />

        <div className="text-center">
          <BtnPaginacion
            pagina={pagina}
            totPag={totPag}
            setPagina={setPagina}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
