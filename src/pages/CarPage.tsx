import { useAppSelector,useAppDispatch } from "../app/hooks";
import { removeToShopping } from "../features/shoppingSlice";
import type { ProductosStore } from "../features/storeSlice";
import "../styles/store/Carrito.css";

export const CarPage = () => {
  const shoppingList = useAppSelector((state) => state.shopping);
  const dispatch = useAppDispatch();

  const handlePrint = () => print();
  localStorage.clear();
  const handleTotal = (): string => {
    return shoppingList
      .reduce((total, item:ProductosStore) => total + item.price * item.amount, 0)
      .toFixed(2);
  };
  const handleLessProduct = (id: number) => {};
  const handleMoreProduct = (id: number) => {};
  const handleDeleteProduct = (product: ProductosStore) => {
    dispatch(removeToShopping(product));
  };
  return (
    <div className="carrito">
      <h1 className="tituloCarrito" hidden={shoppingList.length < 1}>Productos agregados</h1>
      <h3 className="sinCompras" hidden={shoppingList.length > 0}>No tienes <a className="linkCompras" hidden={shoppingList.length > 0} href="/store">Productos</a> agregados</h3>
      <table className="table table-striped" hidden={shoppingList.length < 1}>
        <thead>
          <tr>
            <th scope="col" className="column">Nombre</th>
            <th scope="col" className="column">Precio</th>
            <th scope="col" className="column">Cantidad</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {shoppingList.map(compra => (
            <tr key={compra.id}>
              <td scope="row">{compra.title}</td>
              <td>${compra.price}</td>
              <td>
                <button 
                  className="btn btn-ouline"
                  type="button"
                  onClick={()=>handleLessProduct(compra.id)}
                >-</button>
                <button className="btn btn-primary" >{compra.amount}</button>
                <button 
                  className="btn btn-ouline"
                  type="button"
                  onClick={()=>handleMoreProduct(compra.id)}
                >+</button>
              </td>
              <td>
                <button 
                  className="btn btn-danger"
                  type="button"
                  onClick={()=>handleDeleteProduct(compra)}
                >Eliminar</button>
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
        >Comprar</button>
      </div>
    </div>
  );
};
