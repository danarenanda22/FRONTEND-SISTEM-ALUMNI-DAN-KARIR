import { BrowserRouter, Routes, Route } from "react-router-dom";

// ================= PUBLIC =================
import Home from "../pages/Public/Home";
import Tentang from "../pages/Public/Tentang";
import Informasi from "../pages/Public/Informasi";
import Lowongan from "../pages/Public/Lowongan";
import Kontak from "../pages/Public/Kontak";

// ================= AUTH =================
import Login from "../pages/Auth/Login";

// ================= LAYOUT =================
import AdminLayout from "../layouts/AdminLayout";
import AlumniLayout from "../layouts/AlumniLayout";

// ================= ADMIN =================
import DashboardAdmin from "../pages/Admin/Dashboard";
import Alumni from "../pages/Admin/Alumni";
import TracerStudy from "../pages/Admin/TracerStudy";
import LowonganAdmin from "../pages/Admin/Lowongan";
import InformasiAdmin from "../pages/Admin/Informasi";
import LaporanAdmin from "../pages/Admin/Laporan";
import UserAdmin from "../pages/Admin/User";

// ================= ALUMNI =================
import DashboardAlumni from "../pages/Alumni/Dashboard";
import ProfilAlumni from "../pages/Alumni/Profil";
import TracerStudyAlumni from "../pages/Alumni/TracerStudy";
import LowonganAlumni from "../pages/Alumni/Lowongan";
import InformasiAlumni from "../pages/Alumni/Informasi";
import GantiPassword from "../pages/Alumni/GantiPassword";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}

        <Route path="/" element={<Home />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/lowongan" element={<Lowongan />} />
        <Route path="/kontak" element={<Kontak />} />

        {/* ================= LOGIN ================= */}

        <Route path="/login" element={<Login />} />

        {/* ================= ADMIN ================= */}

        <Route
          path="/admin/dashboard"
          element={
            <AdminLayout>
              <DashboardAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/alumni"
          element={
            <AdminLayout>
              <Alumni />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/tracer-study"
          element={
            <AdminLayout>
              <TracerStudy />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/lowongan"
          element={
            <AdminLayout>
              <LowonganAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/informasi"
          element={
            <AdminLayout>
              <InformasiAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/laporan"
          element={
            <AdminLayout>
              <LaporanAdmin />
            </AdminLayout>
          }
        />

        <Route
          path="/admin/user"
          element={
            <AdminLayout>
              <UserAdmin />
            </AdminLayout>
          }
        />

        {/* ================= ALUMNI ================= */}

        <Route
          path="/alumni/dashboard"
          element={
            <AlumniLayout>
              <DashboardAlumni />
            </AlumniLayout>
          }
        />

        <Route
  path="/alumni/profil"
  element={
    <AlumniLayout>
      <ProfilAlumni />
    </AlumniLayout>
  }
/>

<Route
  path="/alumni/tracer-study"
  element={
    <AlumniLayout>
      <TracerStudyAlumni />
    </AlumniLayout>
  }
/>

<Route
  path="/alumni/lowongan"
  element={
    <AlumniLayout>
      <LowonganAlumni />
    </AlumniLayout>
  }
/>

<Route
  path="/alumni/informasi"
  element={
    <AlumniLayout>
      <InformasiAlumni />
    </AlumniLayout>
  }
/>

<Route
  path="/alumni/ganti-password"
  element={
    <AlumniLayout>
      <GantiPassword />
    </AlumniLayout>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;