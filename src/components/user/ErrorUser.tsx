import { useNavigate } from "react-router-dom";
import {useTranslation} from 'react-i18next'
import "../../styles/user/User.css";

export function ErrorUser() {
  const navigate = useNavigate();
  const { t } = useTranslation("global");
  const handleRegresar = () => {
    navigate("/user");
  };
  return (
    <div className="error">
      <div className="contenido-error">
        <h3 className="titulo-error">{t("signIn.errorTitle")}</h3>
        <p className="texto-error">{t("signIn.errorMessage")}</p>
        <button className="boton-error" onClick={handleRegresar}>
          {t("signIn.btnTryAgain")}
        </button>
      </div>
    </div>
  );
}
