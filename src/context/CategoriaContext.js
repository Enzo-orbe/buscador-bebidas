import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

//crear el context
export const CategoriasContext = createContext();

///provider es done se encuentrar las funciones y el state

const CategoriasProvider = (props) => {
  //creando el sttate del context
  const [categorias, guardarCategorias] = useState([]);

  //ejecutando el llamado a la api
  useEffect(() => {
    const ObtenerCategorias = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

      const categorias = await axios.get(url);

      guardarCategorias(categorias.data.drinks);
    };
    ObtenerCategorias();
  }, []);

  return (
    <CategoriasContext.Provider value={{ categorias }}>
      {props.children}
    </CategoriasContext.Provider>
  );
};

export default CategoriasProvider;
