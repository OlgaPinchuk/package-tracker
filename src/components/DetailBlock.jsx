export default function DetailBlock({label, detail}) {
  return (
    <div className="detail-block">
            <p className="detail-label">{label}:</p>
            <p className="detail-content">{detail}</p>
          </div>
  )
}