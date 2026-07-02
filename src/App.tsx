import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "30px",
          background: "#f3f4f6",
          minHeight: "100vh",
        }}
      >
        <h1>Executive Dashboard</h1>

        <p>
          Welcome to The Springs Living Lease-Up Engine.
        </p>
      </main>
    </div>
  );
}

export default App;