// NPM packages
import { useTranslation } from "react-i18next";

// Project files
import DetailBlock from "./DetailBlock";

export default function PackageInfo({ item }) {
  // Constants
  const {
    sender,
    parcel_id: id,
    location_name: location,
    eta,
    status,
    notes,
    verification_required,
  } = item;

  const [date] = eta.split("T");

  // Translation
  const { t } = useTranslation();
  const statusLabel = t(`home:status:${status}`);
  const header = `${t("packageDetails:titlePart1")}${id} ${t(
    "packageDetails:titlePart2"
  )} ${sender}`;

  return (
    <div className="package-info">
      <h3>{header}</h3>
      <DetailBlock
        label={t("packageDetails:labels:location")}
        info={location}
      />
      <DetailBlock
        label={t("packageDetails:labels:status")}
        info={statusLabel}
      />
      <DetailBlock label={t("packageDetails:labels:date")} info={date} />

      {/* Optional blocks */}
      {notes && (
        <DetailBlock label={t("packageDetails:labels:notes")} info={notes} />
      )}
      {verification_required && (
        <DetailBlock
          label={t("packageDetails:labels:verification")}
          info={t("packageDetails:required")}
        />
      )}
    </div>
  );
}
