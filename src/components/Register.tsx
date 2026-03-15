import { useState } from "react";
import "../styles/Register.css";
import { useAppDispatch } from "../app/hooks";
import { NavLink } from "react-router-dom";
import { addUser } from "../features/user/usersSlice";
import { setLogIn } from "../features/user/logInSlice";

export function Register() {
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    if (newUser.name === "" || newUser.password === "") {
      alert("Please complete the information");
      return;
    } else {
      setAdded(true);
      dispatch(addUser(newUser));
      dispatch(setLogIn({ ...newUser, acces: true }));
      setNewUser({ name: "", password: "" });
    }
  };

  return (
    <div className="registro">
      {added && (
        <div className="contenido-agregado">
          <h3 className="titulo-agregado">Welcome</h3>
          <p className="texto-agregado">
            Your user account was successfully created
          </p>
          <NavLink to="/" className="boton-agregado">
            Continue
          </NavLink>
        </div>
      )}
      {!added && (
        <div className="contenido-registro">
          <h3 className="titulo-registro">New User</h3>
          <div className="formulario-registro">
            <label className="label-registro">Name</label>
            <input
              type="text"
              placeholder="Write your name"
              className="input-registro"
            />
            <label className="label-registro">Last Name</label>
            <input
              type="text"
              placeholder="Write your last name"
              className="input-registro2"
            />
            <label className="label-registro">Phone</label>
            <input
              type="text"
              placeholder="Write your phone number"
              className="input-registro3"
            />
            <label className="label-registro">Birth Date</label>
            <input
              type="date"
              placeholder="Write your birth date"
              className="input-registro4"
            />
            <label className="label-registro">Username</label>
            <input
              type="text"
              placeholder="Write your username"
              className="input-registro5"
              onChange={handleChange}
              name="name"
            />
            <label className="label-registro">Password</label>
            <input
              type="text"
              placeholder="Write your password"
              className="input-registro6"
              onChange={handleChange}
              name="password"
            />
          </div>
          <button className="boton-registro" onClick={handleSubmit}>
            Register for an account
          </button>
        </div>
      )}
    </div>
  );
}
