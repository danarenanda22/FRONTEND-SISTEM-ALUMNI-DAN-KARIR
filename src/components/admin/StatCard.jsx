function StatCard({ title, value, color }) {
  return (
    <div
      className="card border-0 shadow-sm"
      style={{
        borderLeft: `5px solid ${color}`,
        borderRadius: "12px",
      }}
    >
      <div className="card-body">

        <h6 className="text-muted">
          {title}
        </h6>

        <h3
          className="fw-bold"
          style={{ color }}
        >
          {value}
        </h3>

      </div>
    </div>
  );
}

export default StatCard;