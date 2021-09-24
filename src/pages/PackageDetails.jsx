// NPM packages
import { useHistory, useParams } from "react-router-dom";

// Project files
import BackButton from "../components/BackButton";
import PackageInfo from "../components/PackageInfo";
import Map from "../components/common/Map";

export default function PackageDetails({ data }) {
  // Constants
  const history = useHistory();
  const { id } = useParams();
  const currentPackage = data.find((item) => item.parcel_id === id);

  const {
    location_coordinate_latitude: lat,
    location_coordinate_longitude: lng,
  } = currentPackage;

  return (
    <div className="package-details">
      <div className="container">
        <BackButton history={history} />

        <div className="details-card">
          <PackageInfo item={currentPackage} />
          <div className="map-container">
            <Map coordinates={[lat, lng]} />
          </div>
        </div>
      </div>
    </div>
  );
}
