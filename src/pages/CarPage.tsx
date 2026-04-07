import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  removeToShopping,
  lessToShopping,
  moreToShopping,
} from "../features/shoppingSlice";
import { addProduct } from "../features/storeSlice";
import type { ProductosStore } from "../features/storeSlice";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../styles/store/Shopping.css";

export const CarPage = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const dispatch = useAppDispatch();
  const { t } = useTranslation("global");

  const handlePrint = () => print();
  localStorage.clear();
  const handleTotal = (): string => {
    return shoppingList
      .reduce(
        (total, item: ProductosStore) => total + item.price * item.amount,
        0,
      )
      .toFixed(2);
  };
  const handleLessProduct = (product: ProductosStore) => {
    dispatch(lessToShopping(product));
  };
  const handleMoreProduct = (product: ProductosStore) => {
    dispatch(moreToShopping(product));
  };
  const handleDeleteProduct = (product: ProductosStore) => {
    dispatch(removeToShopping(product));
    dispatch(addProduct(product.id));
  };
  return (
    <div className="carrito">
      <h1 className="tituloCarrito" hidden={shoppingList.length < 1}>
        {t("store.titleCar")}
      </h1>
      <div className="containerCar" hidden={shoppingList.length > 0}>
        <h3 className="sinCompras" hidden={shoppingList.length > 0}>
          {t("store.notBuy1")}{" "}
          <a
            className="linkCompras"
            hidden={shoppingList.length > 0}
            href="/store"
          >
            {t("store.notBuy2")}
          </a>{" "}
          {t("store.notBuy3")}
        </h3>
        <NavLink className="btnStore" to="/store">
          {t("store.title")}
        </NavLink>
      </div>
      <table className="table table-striped" hidden={shoppingList.length < 1}>
        <thead>
          <tr>
            <th scope="col" className="column">
              {t("store.tableName")}
            </th>
            <th scope="col" className="column">
              {t("store.tablePrice")}
            </th>
            <th scope="col" className="column">
              {t("store.tableAmount")}
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((compra) => (
            <tr key={compra.id}>
              <td className="tableNameProduct" scope="row">{compra.title}</td>
              <td className="tablePriceProduct">${compra.price}</td>
              <td className="tableAmountProduct">
                <button
                  className="btn btn-ouline"
                  type="button"
                  onClick={() => handleLessProduct(compra)}
                >
                  -
                </button>
                <button className="btn btn-primary shadowButton">
                  {compra.amount}
                </button>
                <button
                  className="btn btn-ouline"
                  type="button"
                  onClick={() => handleMoreProduct(compra)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger shadowButton"
                  type="button"
                  onClick={() => handleDeleteProduct(compra)}
                >
                  {t("store.btnDelete")}
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <th>{t("store.tableTotal")}: </th>
            <th>$ {handleTotal()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btnBuy"
          type="button"
          onClick={handlePrint}
          hidden={shoppingList.length < 1}
        >
          {t("store.btnBuy")}
        </button>
      </div>
    </div>
  );
};
