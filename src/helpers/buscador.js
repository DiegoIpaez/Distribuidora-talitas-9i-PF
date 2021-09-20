const url = "http://localhost:8080/api/buscar"

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