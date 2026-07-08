import StatCard from "../../components/admin/StatCard";
import DashboardChart from "../../components/admin/DashboardChart";
import RecentActivity from "../../components/admin/RecentActivity";

function Dashboard() {
  return (
    <div className="container-fluid">

      <div className="mb-4">
        <h2 className="fw-bold">
          Dashboard Admin
        </h2>

        <p className="text-muted">
          Selamat datang di Sistem Informasi Alumni & Karir
        </p>
      </div>

      {/* Statistik */}

      <div className="row g-4">

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Total Alumni"
            value="1,250"
            color="#0d6efd"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Tracer Study"
            value="860"
            color="#198754"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Lowongan"
            value="45"
            color="#ffc107"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="User Aktif"
            value="320"
            color="#dc3545"
          />
        </div>

      </div>

      {/* Chart + Aktivitas */}

      <div className="row mt-4">

        <div className="col-lg-8">
          <DashboardChart />
        </div>

        <div className="col-lg-4">
          <RecentActivity />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;