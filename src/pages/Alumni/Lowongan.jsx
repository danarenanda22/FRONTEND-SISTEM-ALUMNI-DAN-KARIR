function Lowongan() {

  const lowongan = [
    {
      id: 1,
      perusahaan: "PT Telkom Indonesia",
      posisi: "Frontend Developer",
      lokasi: "Jakarta",
      deadline: "20 Juli 2026",
    },
    {
      id: 2,
      perusahaan: "Bank BCA",
      posisi: "UI/UX Designer",
      lokasi: "Palembang",
      deadline: "28 Juli 2026",
    },
    {
      id: 3,
      perusahaan: "Shopee Indonesia",
      posisi: "Backend Developer",
      lokasi: "Bandung",
      deadline: "30 Juli 2026",
    },
  ];

  return (
    <div className="container-fluid">

      <h2 className="mb-4">
        Lowongan Kerja
      </h2>

      <input
        className="form-control mb-4"
        placeholder="Cari lowongan..."
      />

      <div className="row">

        {lowongan.map((item) => (

          <div className="col-lg-4 mb-4" key={item.id}>

            <div className="card shadow-sm h-100">

              <div className="card-body">

                <h5>{item.posisi}</h5>

                <h6 className="text-primary">
                  {item.perusahaan}
                </h6>

                <p>
                  📍 {item.lokasi}
                </p>

                <p>
                  Deadline :
                  <br />
                  {item.deadline}
                </p>

                <button className="btn btn-success w-100">
                  Lihat Detail
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Lowongan;