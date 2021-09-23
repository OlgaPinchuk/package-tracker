// NPM packages
import { useHistory, useParams } from "react-router-dom";

// Project files
import BackButton from "../components/BackButton";

export default function PackageDetails({ data }) {
  const history = useHistory();
  const { id } = useParams();
  const currentParcel = data.find((item) => item.parcel_id === id);

  const {
    sender,
    status,
    location_name: location,
    location_coordinate_latitude: lat,
    location_coordinate_longitude: lng,
    notes,
    verification
  } = currentParcel;

  return (
    <>
      <h1>Package Details</h1>
      <BackButton history={history} />
    </>
  );
}
