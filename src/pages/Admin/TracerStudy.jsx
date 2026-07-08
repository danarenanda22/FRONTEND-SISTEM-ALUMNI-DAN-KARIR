import TracerTable from "../../components/admin/TracerTable";

function TracerStudy() {
  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Tracer Study
        </h2>

        <p className="text-muted">
          Kelola data tracer study alumni
        </p>

      </div>

      <TracerTable />

    </div>
  );
}

export default TracerStudy;