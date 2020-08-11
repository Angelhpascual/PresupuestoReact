import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";

function App() {
  //Crear listado de productos

  const [productos, setProductos] = useState([
    { id: 1, nombre: "Camisa ReactJs", precio: 50 },
    { id: 2, nombre: "Camisa Vuejs", precio: 40 },
    { id: 3, nombre: "Camisa Nodejs", precio: 30 },
    { id: 4, nombre: "Camisa Angular", precio: 20 },
  ]);

  //Variable para la fecha y mandarla por props a Footer
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda Virtual" />

      <h1>Lista de Productos</h1>

      {productos.map((producto) => (
        <Producto
        
        key= {producto.id}
        producto={producto} />

      ))}

      <Footer fecha={fecha} />
    </Fragment>
  );
}

export default App;
