import StatCard from "../../components/alumni/StatCard";
import JobCard from "../../components/alumni/JobCard";
import InfoCard from "../../components/alumni/InfoCard";
import ProgressCard from "../../components/alumni/ProgressCard";
import QuickMenu from "../../components/alumni/QuickMenu";
import ActivityCard from "../../components/alumni/ActivityCard";
import NotificationCard from "../../components/alumni/NotificationCard";

function Dashboard() {
  return (
    <div className="container-fluid">

      {/* Header */}

      <div className="mb-4">

        <h2 className="fw-bold">
          Selamat Datang, Budi Santoso 👋
        </h2>

        <p className="text-muted">
          Selamat datang di Sistem Informasi Alumni dan Karir Universitas Nurul Huda.
        </p>

      </div>

      {/* Statistik */}

      <div className="row g-4 mb-5">

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Lowongan Aktif"
            value="25"
            color="#0d6efd"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Informasi"
            value="8"
            color="#198754"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Tracer Study"
            value="Sudah"
            color="#ffc107"
          />
        </div>

        <div className="col-lg-3 col-md-6">
          <StatCard
            title="Profil"
            value="Lengkap"
            color="#dc3545"
          />
        </div>

      </div>

      {/* Menu Cepat */}

      <h4 className="mb-3">
        Menu Cepat
      </h4>

      <QuickMenu />

      {/* Lowongan & Informasi */}

      <div className="row mt-5">

        <div className="col-lg-8">

          <h4 className="mb-3">
            Lowongan Terbaru
          </h4>

          <JobCard />

        </div>

        <div className="col-lg-4">

          <h4 className="mb-3">
            Informasi Terbaru
          </h4>

          <InfoCard />

          <div className="mt-4">
            <ProgressCard />
          </div>

        </div>

      </div>

      {/* Aktivitas & Notifikasi */}

      <div className="row mt-5">

        <div className="col-lg-6">

          <ActivityCard />

        </div>

        <div className="col-lg-6">

          <NotificationCard />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;