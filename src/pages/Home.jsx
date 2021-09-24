// NPM packages
import { useTranslation } from "react-i18next";

// Project files
import Card from "../components/Card";

export default function Home({ data }) {
  // Translation
  const { t } = useTranslation();

  const PackageList = data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="home">
      <div className="container">
        <h2 className="heading">{t("home:header")}</h2>
        <div className="packages">{PackageList}</div>
      </div>
    </div>
  );
}
