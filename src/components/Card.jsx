// NPM Packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Card({ item }) {
  // Constants
  const { parcel_id: id, sender, status } = item;

  // Translation
  const { t } = useTranslation();
  const statusLabel = t(`home:status:${status}`);

  return (
    <Link to={`/packages/${id}`} className="card">
      <div className="card-header">
        <h3>{sender}</h3>
        <p>#{id}</p>
      </div>
      <div className="card-content">
        <p>
          <b>{t("home:status:header")}</b> {statusLabel}
        </p>
      </div>
      <div className="view-more">
        <p>{t("home:veiwMore")}</p>
      </div>
    </Link>
  );
}
