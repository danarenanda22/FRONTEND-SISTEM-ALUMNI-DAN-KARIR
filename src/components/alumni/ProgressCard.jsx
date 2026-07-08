function ProgressCard() {
  return (
    <div className="card shadow-sm">

      <div className="card-body">

        <h5>Progress Tracer Study</h5>

        <div className="progress mt-3">

          <div
            className="progress-bar"
            style={{ width: "75%" }}
          >
            75%
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProgressCard;