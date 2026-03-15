import "../styles/User.css"

export function ErrorUser() {
  const handleRegresar = () => {
    window.location.href = "/user";
  }
  return (
    <div className="error">
      <div className="contenido-error">
        <h3 className="titulo-error">Error</h3>
        <p className="texto-error">The name or password</p>
        <p className="texto-error">are incorrect</p>
        <button className="boton-error" onClick={handleRegresar}>Return</button>
      </div>
    </div>
  );
}
