// NPM packages
import { useHistory, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import BackButton from "../components/BackButton";
import DetailBlock from "../components/DetailBlock";
import Map from "../components/Map";

export default function PackageDetails({ data }) {
  // Constants
  const history = useHistory();
  const { id } = useParams();
  const currentParcel = data.find((item) => item.parcel_id === id);

  const {
    sender,
    status,
    eta,
    location_name: location,
    location_coordinate_latitude: lat,
    location_coordinate_longitude: lng,
    notes,
    verification_required,
  } = currentParcel;

  const [date] = eta.split("T");

  // Translation
  const { t } = useTranslation();
  const header = `${t("packageDetailsPage:titlePart1")}${id} ${t(
    "packageDetailsPage:titlePart2"
  )} ${sender}`;
  const statusLabel = t(`homePage:status:${status}`);

  return (
    <div className="package-details">
      <div className="container">
        <BackButton history={history} />
        <div className="details">
          <h3>{header}</h3>
          <DetailBlock
            label={t("packageDetailsPage:labels:location")}
            detail={location}
          />
          <DetailBlock
            label={t("packageDetailsPage:labels:status")}
            detail={statusLabel}
          />
          <DetailBlock
            label={t("packageDetailsPage:labels:date")}
            detail={date}
          />

          {/* Optional blocks */}
          {notes && <DetailBlock label="Notes" detail={notes} />}

          {verification_required && (
            <DetailBlock
              label={t("packageDetailsPage:labels:verification")}
              detail={t("packageDetailsPage:required")}
            />
          )}

          {/* Map */}
          <div className="map-container">
            <Map coordinates={[lat, lng]} />
          </div>
        </div>
      </div>
    </div>
  );
}
