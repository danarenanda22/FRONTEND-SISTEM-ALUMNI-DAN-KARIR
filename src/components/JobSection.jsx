import "./JobSection.css";
import { FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function JobSection() {
  const jobs = [
    {
      id: 1,
      perusahaan: "PT Telkom Indonesia",
      posisi: "Frontend Developer",
      lokasi: "Jakarta",
      tipe: "Full Time",
    },
    {
      id: 2,
      perusahaan: "Bank BCA",
      posisi: "UI/UX Designer",
      lokasi: "Bandung",
      tipe: "Full Time",
    },
    {
      id: 3,
      perusahaan: "Shopee Indonesia",
      posisi: "Backend Developer",
      lokasi: "Surabaya",
      tipe: "Hybrid",
    },
  ];

  return (
    <section className="job-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Lowongan Kerja</h2>
          <p className="text-muted">
            Temukan peluang karier terbaik untuk alumni.
          </p>
        </div>

        <div className="row">

          {jobs.map((job) => (
            <div className="col-lg-4 mb-4" key={job.id}>

              <div className="job-card">

                <h5>{job.perusahaan}</h5>

                <h3>{job.posisi}</h3>

                <p>
                  <FaMapMarkerAlt /> {job.lokasi}
                </p>

                <p>
                  <FaBriefcase /> {job.tipe}
                </p>

                <button className="btn btn-primary w-100">
                  Lihat Detail
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default JobSection;