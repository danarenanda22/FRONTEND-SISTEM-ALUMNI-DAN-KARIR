function Informasi() {
  const informasi = [
    {
      id: 1,
      judul: "Seminar Karir Nasional",
      tanggal: "10 Juli 2026",
      isi: "Menghadirkan pembicara dari perusahaan nasional.",
    },
    {
      id: 2,
      judul: "Pelatihan UI/UX",
      tanggal: "15 Juli 2026",
      isi: "Pelatihan desain UI/UX menggunakan Figma.",
    },
    {
      id: 3,
      judul: "Job Fair Universitas",
      tanggal: "20 Juli 2026",
      isi: "Bursa kerja bagi seluruh alumni Universitas Nurul Huda.",
    },
  ];

  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Informasi Alumni
      </h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Cari informasi..."
      />

      <div className="row">

        {informasi.map((item) => (

          <div className="col-lg-4 mb-4" key={item.id}>

            <div className="card shadow-sm h-100">

              <div className="card-body">

                <h5>{item.judul}</h5>

                <small className="text-muted">
                  {item.tanggal}
                </small>

                <p className="mt-3">
                  {item.isi}
                </p>

                <button className="btn btn-primary w-100">
                  Baca Selengkapnya
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Informasi;