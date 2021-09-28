const url = "https://backend-di.herokuapp.com/api/buscar"

export const getBuscar = async (coleccion, termino) => {
    const resp = await fetch(`${url}/${coleccion}/${termino}`, {
      method: "GET",
  
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const datos = await resp.json();
  
    return datos;
  };