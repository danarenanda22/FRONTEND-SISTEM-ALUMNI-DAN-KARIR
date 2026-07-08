import "./DashboardCard.css";

function DashboardCard({ title, value, color }) {
  return (
    <div className="dashboard-card">

      <div
        className="card-icon"
        style={{ background: color }}
      />

      <h2>{value}</h2>

      <p>{title}</p>

    </div>
  );
}

export default DashboardCard;