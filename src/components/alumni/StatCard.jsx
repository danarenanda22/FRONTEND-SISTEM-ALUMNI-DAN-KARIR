function StatCard({ title, value, color }) {
  return (
    <div
      className="card shadow-sm border-0 h-100"
      style={{ borderLeft: `5px solid ${color}` }}
    >
      <div className="card-body">

        <h6 className="text-muted">
          {title}
        </h6>

        <h2 className="fw-bold">
          {value}
        </h2>

      </div>
    </div>
  );
}

export default StatCard;