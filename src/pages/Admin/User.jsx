import UserTable from "../../components/admin/UserTable";

function User() {
  return (
    <div className="container-fluid">

      <div className="mb-4">

        <h2 className="fw-bold">
          Manajemen User
        </h2>

        <p className="text-muted">
          Kelola akun admin dan alumni
        </p>

      </div>

      <UserTable />

    </div>
  );
}

export default User;