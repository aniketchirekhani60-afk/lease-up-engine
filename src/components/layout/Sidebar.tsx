function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Communities",
    "Marketing",
    "Leads",
    "Move-ins",
    "Reports",
  ];

  return (
    <aside
      style={{
        width: "240px",
        backgroundColor: "#1f2937",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>🏢 Lease-Up Engine</h2>

      {menuItems.map((item) => (
        <div
          key={item}
          style={{
            padding: "12px",
            marginBottom: "10px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {item}
        </div>
      ))}
    </aside>
  );
}

export default Sidebar;