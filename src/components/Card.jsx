// NPM Packages
import { Link } from "react-router-dom";

export default function Card({ item }) {
  const { parcel_id: id, sender, status } = item;

  return (
    <Link to={`/packages/${id}`} className="card">
      <div className="card-header">
        <h3>{sender}</h3>
        <p>#{id}</p>
      </div>
      <div className="card-content">
        <p>
          <b>Status:</b> {status}
        </p>
      </div>
      <div className="view-more">
        <p>View more</p>
      </div>
    </Link>
  );
}
