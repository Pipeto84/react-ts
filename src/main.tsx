import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { store } from "./app/store.tsx";
import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import en from "./translations/en.json";
import es from "./translations/es.json";

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    en: {
      global: en,
    },
    es: {
      global: es,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </Provider>
  </StrictMode>,
);
