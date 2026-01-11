import { useState } from "react";
import "../styles/store/CardCompras.css";

import type { ProductosStore } from "../features/storeSlice";
interface Props {
  producto: ProductosStore;
}

export const Card = ({ producto }: Props) => {
  const [agregado, setAgregado] = useState<boolean>(producto.agregar);

  const clickAgregar = () => {
    setAgregado(true);
  };
  const clickQuitar = () => {
    setAgregado(false);
  };
  return (
    <div className="tarjeta">
      <img className="tarjeta-imagen" src={producto.image} alt="imagen" />
      <div className="tarjeta-contenido">
        <h3 className="tarjeta-titulo">{producto.title}</h3>
        <p className="tarjeta-descripcion">{producto.description}</p>
        <p className="tarjeta-precio">$ {producto.price}</p>
        <div className="botones-compra">
          {agregado ? (
            <button
              className="boton-quitar"
              type="button"
              onClick={() => clickQuitar()}
            >
              Quitar del carrito
            </button>
          ) : (
            <button
              className="boton-agregar"
              type="button"
              onClick={() => clickAgregar()}
            >
              Agregar al carrito
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
