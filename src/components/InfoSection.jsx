import "./InfoSection.css";

function InfoSection() {
  const informasi = [
    {
      id: 1,
      judul: "Workshop UI/UX Design",
      tanggal: "10 Juli 2026",
      deskripsi:
        "Pelatihan UI/UX untuk meningkatkan keterampilan alumni dalam mendesain antarmuka aplikasi."
    },
    {
      id: 2,
      judul: "Seminar Karier",
      tanggal: "15 Juli 2026",
      deskripsi:
        "Seminar bersama praktisi industri mengenai persiapan memasuki dunia kerja."
    },
    {
      id: 3,
      judul: "Pengumuman Tracer Study",
      tanggal: "20 Juli 2026",
      deskripsi:
        "Seluruh alumni diharapkan mengisi tracer study melalui sistem."
    }
  ];

  return (
    <section className="info-section">
      <div className="container">

        <div className="text-center mb-5">
          <h2 className="fw-bold">Informasi Terbaru</h2>
          <p className="text-muted">
            Informasi dan pengumuman terbaru untuk alumni.
          </p>
        </div>

        <div className="row">

          {informasi.map((item) => (
            <div className="col-lg-4 mb-4" key={item.id}>

              <div className="info-card">

                <span className="tanggal">
                  {item.tanggal}
                </span>

                <h4>{item.judul}</h4>

                <p>{item.deskripsi}</p>

                <button className="btn btn-primary">
                  Selengkapnya
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default InfoSection;