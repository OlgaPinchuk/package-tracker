// NPM packages
import { useTranslation } from "react-i18next";

export default function BackButton({ history }) {
  // Translation
  const { t } = useTranslation();

  return (
    <button className="back-button" onClick={() => history.goBack()}>
      ❮ {t("packageDetails:backButton")}
    </button>
  );
}
