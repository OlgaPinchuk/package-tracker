export default function DetailBlock({ label, info }) {
  return (
    <div className="detail-block">
      <p className="detail-label">{label}:</p>
      <p className="detail-content">{info}</p>
    </div>
  );
}
