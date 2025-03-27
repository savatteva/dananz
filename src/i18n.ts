import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import mainPage from "../public/locales/ru/mainPage.json";

const resources = {
  en: {
    mainPage: mainPage,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
});

export default i18next;
