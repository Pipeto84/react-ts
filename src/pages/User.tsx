import "../styles/User.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setLogIn } from "../features/user/logInSlice";

export function User() {
  const [acceso, setAcceso] = useState(false);
  const dispatch = useAppDispatch();
  const logIn = useAppSelector((state) => state.logIn);
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
    const usuarioEncontrado = users.find(
      (u) =>
        u.name === user.name && u.password === user.password,
    );
    if (usuarioEncontrado) {
      setAcceso(true);
      setUser({ ...user, acces: true });
      dispatch(setLogIn({ ...user, acces: true }));
    } else {
      window.location.href = "/ErrorU";
    }
  };
  const handleCerrar = () => {
    setAcceso(false);
    setUser({ name: "", password: "", acces: false });
    dispatch(setLogIn({ name: "", password: "", acces: false }));
  };
  return (
    <div className="ingresar">
      {!acceso && (
        <div className="contenido-ingresar">
          <h3 className="titulo-ingresar">Iniciar Sesion</h3>
          <div className="formulario-ingresar">
            <label className="label-ingresar1">Usuario</label>
            <input
              type="text"
              placeholder="Escribe tu usuario"
              className="input-ingresar1"
              onChange={handleChange}
              name="name"
            />
            <label className="label-ingresar2">Contraseña</label>
            <input
              type="text"
              placeholder="Escribe tu contraseña"
              className="input-ingresar2"
              onChange={handleChange}
              name="password"
            />
          </div>
          <button className="boton-ingresar" onClick={handleSubmit}>
            Ingresar
          </button>
          <NavLink to="/registrar" className="registro-link">
            Registrarse
          </NavLink>
          <button className="boton-cerrar" onClick={handleCerrar}>
            Cerrar sesion
          </button>
        </div>
      )}
      {acceso && (
        <div className="contenido-ingresoU">
          <h3 className="titulo-ingresoU">Bienvenido</h3>
          <p className="texto-ingresoU">Tu ingreso fue exitoso</p>
          <NavLink to="/" className="boton-ingresoU">
            Continuar
          </NavLink>
        </div>
      )}
    </div>
  );
}
