import AlumniTable from "../../components/admin/AlumniTable";

function Alumni() {
  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Data Alumni
        </h2>

        <p className="text-muted">
          Kelola data alumni kampus
        </p>

      </div>

      <AlumniTable />

    </div>
  );
}

export default Alumni;