import { useEffect } from "react";
import { Card } from "../components/StoreCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import "../styles/store/Compras.css";
import { setStore } from "../features/storeSlice";
import type { ProductosStore } from "../features/storeSlice";


export const StorePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);

  const fetchProductos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: ProductosStore[] = await response.json();
      data.map((item) => (item.agregar = false));
      dispatch(setStore(data));
    } catch (error) {
      console.error("El error es: ", error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);

  return (
    <div className="contenedor-compras">
      <h1 className="tituloProductos">Productos</h1>
      <div className="contenedor-productos">
        {products.map((product) => (
          <Card key={product.id} producto={product}></Card>
        ))}
      </div>
    </div>
  );
};
