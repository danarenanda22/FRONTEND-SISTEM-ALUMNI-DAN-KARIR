import "./Stats.css";
import {
  FaUserGraduate,
  FaBuilding,
  FaBriefcase,
  FaClipboardCheck,
} from "react-icons/fa";

function Stats() {
  const data = [
    {
      id: 1,
      angka: "1.250+",
      judul: "Alumni",
      icon: <FaUserGraduate />,
    },
    {
      id: 2,
      angka: "85+",
      judul: "Perusahaan Mitra",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      angka: "120+",
      judul: "Lowongan Aktif",
      icon: <FaBriefcase />,
    },
    {
      id: 4,
      angka: "92%",
      judul: "Tracer Study",
      icon: <FaClipboardCheck />,
    },
  ];

  return (
    <section className="stats-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Statistik Alumni</h2>
          <p className="text-muted">
            Gambaran perkembangan alumni dan layanan karier.
          </p>
        </div>

        <div className="row">

          {data.map((item) => (
            <div className="col-lg-3 col-md-6 mb-4" key={item.id}>

              <div className="stats-card">

                <div className="stats-icon">
                  {item.icon}
                </div>

                <h2>{item.angka}</h2>

                <p>{item.judul}</p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Stats;