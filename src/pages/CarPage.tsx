import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  removeToShopping,
  lessToShopping,
  moreToShopping,
} from "../features/shoppingSlice";
import { addProduct } from "../features/storeSlice";
import type { ProductosStore } from "../features/storeSlice";
import "../styles/store/Shopping.css";

export const CarPage = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const dispatch = useAppDispatch();

  const handlePrint = () => print();
  localStorage.clear();
  const handleTotal = (): string => {
    return shoppingList
      .reduce(
        (total, item: ProductosStore) => total + item.price * item.amount,
        0
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
        Shopping cart
      </h1>
      <h3 className="sinCompras" hidden={shoppingList.length > 0}>
        You have no{" "}
        <a
          className="linkCompras"
          hidden={shoppingList.length > 0}
          href="/store"
        >
          products
        </a>{" "}
        in your shopping cart
      </h3>
      <table className="table table-striped" hidden={shoppingList.length < 1}>
        <thead>
          <tr>
            <th scope="col" className="column">
              Name
            </th>
            <th scope="col" className="column">
              Price
            </th>
            <th scope="col" className="column">
              Amount
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map((compra) => (
            <tr key={compra.id}>
              <td scope="row">{compra.title}</td>
              <td>${compra.price}</td>
              <td>
                <button
                  className="btn btn-ouline"
                  type="button"
                  onClick={() => handleLessProduct(compra)}
                >
                  -
                </button>
                <button className="btn btn-primary shadowButton">{compra.amount}</button>
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
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <th>Total: </th>
            <th>$ {handleTotal()}</th>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          type="button"
          onClick={handlePrint}
          hidden={shoppingList.length < 1}
        >
          Buy
        </button>
      </div>
    </div>
  );
};
