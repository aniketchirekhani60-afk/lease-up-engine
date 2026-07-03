import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Communities", path: "/communities" },
    { name: "Marketing", path: "/marketing" },
    { name: "Leads", path: "/leads" },
    { name: "Move-ins", path: "/moveins" },
    { name: "Reports", path: "/reports" },
  ];

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">🏢 Lease-Up Engine</h2>

      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          end={item.path === "/"}
        >
          {item.name}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;