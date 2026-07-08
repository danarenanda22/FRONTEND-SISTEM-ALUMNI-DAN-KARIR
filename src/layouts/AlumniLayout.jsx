import Sidebar from "../components/alumni/Sidebar";
import Topbar from "../components/alumni/Topbar";

function AlumniLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

      {/* SIDEBAR */}
      <div style={{ width: "260px", flexShrink: 0 }}>
        <Sidebar />
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>

        <Topbar />

        <div style={{ padding: "20px" }}>
          {children}
        </div>

      </div>

    </div>
  );
}

export default AlumniLayout;