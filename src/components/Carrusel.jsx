import React from "react";
import { Carousel } from "react-bootstrap";

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block img-carousel"
          src="https://www.pallomaro.com/wp-content/uploads/2018/09/Gran-promocion-pallomaro-02-02.png"
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block img-carousel"
          src="https://blog.misterplan.es/wp-content/uploads/ofertas02.png"
          alt="Second slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  interval={2000}>
        <img
          className="d-block img-carousel"
          src="https://www.esan.edu.pe/apuntes-empresariales/2019/04/23/1500x844_promociones_ventas.jpg"
          alt="Third slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carrusel;
