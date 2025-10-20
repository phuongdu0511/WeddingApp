import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import vi from "./vi.json";
import de from "./de.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      de: { translation: de },
    },
    lng: "vi", // ngôn ngữ mặc định
    fallbackLng: "vi",
    interpolation: { escapeValue: false },
  });

export default i18n;