import "../styles/User.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLogIn } from "../features/user/logInSlice";

export function User() {
  const [acces, setAcces] = useState(false);
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const [user, setUser] = useState({
    name: "",
    password: "",
    acces: false,
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    const userFinded = users.find(
      (u) =>
        u.name === user.name && u.password === user.password,
    );
    if (userFinded) {
      setAcces(true);
      setUser({ ...user, acces: true });
      dispatch(setLogIn({ ...user, acces: true }));
    } else {
      window.location.href = "/ErrorU";
    }
  };
  const handleCerrar = () => {
    setAcces(false);
    setUser({ name: "", password: "", acces: false });
    dispatch(setLogIn({ name: "", password: "", acces: false }));
  };
  return (
    <div className="ingresar">
      {!acces && (
        <div className="contenido-ingresar">
          <h3 className="titulo-ingresar">Sign in</h3>
          <div className="formulario-ingresar">
            <label className="label-ingresar1">Name</label>
            <input
              type="text"
              placeholder="Write your name"
              className="input-ingresar1"
              onChange={handleChange}
              name="name"
            />
            <label className="label-ingresar2">Password</label>
            <input
              type="text"
              placeholder="Write your password"
              className="input-ingresar2"
              onChange={handleChange}
              name="password"
            />
          </div>
          <button className="boton-ingresar" onClick={handleSubmit}>
            Sign in
          </button>
          <NavLink to="/registrar" className="registro-link">
            Register
          </NavLink>
          <button className="boton-cerrar" onClick={handleCerrar}>
            Sign out
          </button>
        </div>
      )}
      {acces && (
        <div className="contenido-ingresoU">
          <h3 className="titulo-ingresoU">Welcome</h3>
          <p className="texto-ingresoU">Your login was successful</p>
          <NavLink to="/" className="boton-ingresoU">
            Continue
          </NavLink>
        </div>
      )}
    </div>
  );
}
