import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const fecha = new Date().getFullYear();

  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <Header titulo="Tienda Virtual" />
      <Footer fecha={fecha} />
    </div>
  );
}

export default App;
