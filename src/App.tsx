import Sidebar from "./components/layout/Sidebar";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Communities from "./pages/Communities";
import Marketing from "./pages/Marketing";
import Leads from "./pages/Leads";
import MoveIns from "./pages/MoveIns";
import Reports from "./pages/Reports";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/moveins" element={<MoveIns />} />
          <Route path="/reports" element={<Reports />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;