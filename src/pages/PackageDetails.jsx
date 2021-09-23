// NPM packages
import { useHistory, useParams } from "react-router-dom";

// Project files
import BackButton from "../components/BackButton";
import DetailBlock from "../components/DetailBlock";
import Map from "../styles/components/Map";

export default function PackageDetails({ data }) {
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

  return (
    <div className="package-details">
      <div className="container">
        <BackButton history={history} />
        <div className="details">
          <h3>
            Order #{id} from {sender}
          </h3>
          <DetailBlock label="Location" detail={location} />
          <DetailBlock label="Delivery status" detail={status} />
          <DetailBlock label="Delivery date" detail={date} />
          {notes && <DetailBlock label="Notes" detail={notes} />}
          {verification_required && (
            <DetailBlock
              label="Verification"
              detail="Required"
            />
          )}
          <div className="map-container">
            <Map coordinates={[lat, lng]} />
          </div>
        </div>
      </div>
    </div>
  );
}
