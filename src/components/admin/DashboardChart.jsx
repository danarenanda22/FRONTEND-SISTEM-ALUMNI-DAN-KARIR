function DashboardChart() {
  return (
    <div className="card border-0 shadow-sm mt-4">
      <div className="card-body">

        <h5 className="fw-bold mb-4">
          Statistik Alumni
        </h5>

        <div
          className="d-flex align-items-end justify-content-around"
          style={{ height: "250px" }}
        >

          <div className="text-center">
            <div
              style={{
                width: "50px",
                height: "120px",
                background: "#0d6efd",
                borderRadius: "10px",
              }}
            ></div>

            <small>2021</small>
          </div>

          <div className="text-center">
            <div
              style={{
                width: "50px",
                height: "180px",
                background: "#198754",
                borderRadius: "10px",
              }}
            ></div>

            <small>2022</small>
          </div>

          <div className="text-center">
            <div
              style={{
                width: "50px",
                height: "220px",
                background: "#ffc107",
                borderRadius: "10px",
              }}
            ></div>

            <small>2023</small>
          </div>

          <div className="text-center">
            <div
              style={{
                width: "50px",
                height: "160px",
                background: "#dc3545",
                borderRadius: "10px",
              }}
            ></div>

            <small>2024</small>
          </div>

        </div>

      </div>
    </div>
  );
}

export default DashboardChart;