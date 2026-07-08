import InformasiTable from "../../components/admin/InformasiTable";

function Informasi() {
  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Informasi Kampus
        </h2>

        <p className="text-muted">
          Kelola informasi untuk alumni
        </p>

      </div>

      <InformasiTable />

    </div>
  );
}

export default Informasi;