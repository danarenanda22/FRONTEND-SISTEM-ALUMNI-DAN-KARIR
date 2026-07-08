import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

function AdminLayout({ children }) {
  return (
    <>
      <Sidebar />

      <div
        style={{
          marginLeft: "260px",
          minHeight: "100vh",
          background: "#f8f9fa",
        }}
      >
        <Topbar />

        <div className="container-fluid p-4">
          {children}
        </div>
      </div>
    </>
  );
}

export default AdminLayout;