// NPM packages
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Project files
import logo from "../assets/images/logo.png";
import i18n from "../i18n";

export default function Header() {
  // State
  const [language, setLanguage] = useState("en");

  // Translation
  const { t } = useTranslation();

  // Methods
  function changeLanguage() {
    if (language === "en") {
      i18n.changeLanguage("ua");
      setLanguage("ua");
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }

  return (
    <header className="header container">
      <img className="logo" src={logo} alt="InstaPacket logo" />
      <h1>
        {t("header:mainHeader1")} <span>{t("header:mainHeader2")}</span>
      </h1>
      <button className="language-toggler" onClick={changeLanguage}>
        {language === "en" ? "UA" : "EN"}
      </button>
    </header>
  );
}
