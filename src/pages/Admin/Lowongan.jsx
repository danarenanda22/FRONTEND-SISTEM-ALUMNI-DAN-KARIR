import LowonganTable from "../../components/admin/LowonganTable";

function Lowongan() {
  return (
    <div className="container-fluid">
      <h2 className="mb-4">Manajemen Lowongan Kerja</h2>

      <LowonganTable />
    </div>
  );
}

export default Lowongan;