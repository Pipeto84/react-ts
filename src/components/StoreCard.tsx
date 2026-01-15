import { useState } from "react";
import {useAppDispatch} from '../app/hooks';
import "../styles/store/CardStore.css";

import { addProduct, type ProductosStore } from "../features/storeSlice";
import { addToShopping, removeToShopping } from "../features/shoppingSlice";
interface Props {
  producto: ProductosStore;
}

export const Card = ({ producto }: Props) => {
  const [agregado, setAgregado] = useState<boolean>(producto.agregar);
  const dispatch = useAppDispatch();

  const clickAgregar = (product: ProductosStore) => {
    setAgregado(true);
    dispatch(addToShopping(product));
    dispatch(addProduct(product.id));
  };
  const clickQuitar = (product: ProductosStore) => {
    setAgregado(false);
    dispatch(removeToShopping(product));
    dispatch(addProduct(product.id));
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
              onClick={() => clickQuitar(producto)}
            >
              Remove from cart
            </button>
          ) : (
            <button
              className="boton-agregar"
              type="button"
              onClick={() => clickAgregar(producto)}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
