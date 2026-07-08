import { Link } from "react-router-dom";
import {
  FaClipboardList,
  FaBriefcase,
  FaNewspaper,
  FaUserEdit,
} from "react-icons/fa";

function QuickMenu() {
  const menus = [
    {
      title: "Isi Tracer",
      icon: <FaClipboardList size={30} />,
      color: "warning",
      link: "/alumni/tracer-study",
    },
    {
      title: "Lowongan",
      icon: <FaBriefcase size={30} />,
      color: "primary",
      link: "/alumni/lowongan",
    },
    {
      title: "Informasi",
      icon: <FaNewspaper size={30} />,
      color: "success",
      link: "/alumni/informasi",
    },
    {
      title: "Edit Profil",
      icon: <FaUserEdit size={30} />,
      color: "danger",
      link: "/alumni/profil",
    },
  ];

  return (
    <div className="row g-3">

      {menus.map((item, index) => (
        <div className="col-lg-3 col-md-6" key={index}>

          <Link
            to={item.link}
            className="text-decoration-none"
          >

            <div className={`card border-0 shadow-sm text-center bg-${item.color} text-white`}>

              <div className="card-body">

                {item.icon}

                <h5 className="mt-3">
                  {item.title}
                </h5>

              </div>

            </div>

          </Link>

        </div>
      ))}

    </div>
  );
}

export default QuickMenu;