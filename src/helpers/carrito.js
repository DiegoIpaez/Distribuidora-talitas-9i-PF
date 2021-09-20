const url = "http://localhost:8080/api/carrito";

export const getCarrito = async (desde) => {
    const resp = await fetch(`${url}?desde=${desde}`, {
      method: "GET",
  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const datos = await resp.json();
  
    return datos;
  };

  export const getCarritoId = async (id) => {
    const resp = await fetch(`${url}/${id}`, {
      method: "GET",
  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const datos = await resp.json();
  
    return datos;
  };

  export const postCarrito = async (data) => {
    const resp = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("auth")).token,
      },
    });
    const datos = await resp.json();
  
    return datos;
  };

  export const putCarrito = async (id, data) => {
    const resp = await fetch(`${url}/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("auth")).token,
      },
    });
    const datos = await resp.json();
  
    return datos;
  };

  export const deleteCarrito = async (id) => {
    const resp = await fetch(`${url}/${id}`, {
      method: "DELETE",
  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "x-token": JSON.parse(localStorage.getItem("auth")).token,
      },
    });
    const datos = await resp.json();
  
    return datos;
  };