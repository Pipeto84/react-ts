import { useEffect } from "react";
import { Card } from "../components/StoreCard";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setStore } from "../features/storeSlice";
import type { ProductosStore } from "../features/storeSlice";
import { useTranslation } from "react-i18next";
import "../styles/store/Store.css";

export const StorePage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const { t } = useTranslation("global");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data: { products: ProductosStore[] } = await response.json();
      data.products.map((item) => ((item.agregar = false), (item.amount = 0)));
      if (products.length === 0) {
        dispatch(setStore(data.products));
      }
    } catch (error) {
      console.error("El error es: ", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="contenedor-compras">
      <h1 className="tituloProductos">{t("store.title")}</h1>
      <div className="contenedor-productos">
        {products.map((product) => (
          <Card key={product.id} producto={product}></Card>
        ))}
      </div>
    </div>
  );
};
