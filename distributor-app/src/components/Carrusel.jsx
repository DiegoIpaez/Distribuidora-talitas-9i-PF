import React from "react";
import { Carousel } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block img-carousel"
          src="https://derecho.unc.edu.ar/wp-content/uploads/sites/7/2021/03/Web-5.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block img-carousel"
          src="https://www.easypromosapp.com/blog/wp-content/uploads/imagen_redes_sociales_ideas_promociones_punto_venta.png"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
        <img
          className="d-block img-carousel"
          src="https://www.pallomaro.com/wp-content/uploads/2018/09/Gran-promocion-pallomaro-02-02.png"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
