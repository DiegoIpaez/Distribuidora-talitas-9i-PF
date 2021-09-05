const CarritoRecibo = ({ data }) => {
  let { name, price, quantity } = data;
  return (
    <div>
      <h4>{name}</h4>
      <h5>
        ${price} x{quantity} = ${price * quantity}
      </h5>
    </div>
  );
};

export default CarritoRecibo;
