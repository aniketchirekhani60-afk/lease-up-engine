import DashboardHeader from "../components/dashboard/DashboardHeader";
import ExecutiveKpis from "../components/dashboard/ExecutiveKpis";
import LeaseUpFunnel from "../components/dashboard/LeaseUpFunnel";
import ExecutiveAlerts from "../components/dashboard/ExecutiveAlerts";
import CommunityHealthGrid from "../components/dashboard/CommunityHealthGrid";
import OpeningTimeline from "../components/dashboard/OpeningTimeline";
import CommunityPerformanceTable from "../components/dashboard/CommunityPerformanceTable";

function Dashboard() {
  return (
    <>
      <DashboardHeader />

      <div className="section">
        <ExecutiveKpis />
      </div>

      <div className="dashboard-charts-grid">
        <LeaseUpFunnel />
        <ExecutiveAlerts />
      </div>

      <div className="section">
        <h2 className="chart-card-title">Community Health</h2>
        <CommunityHealthGrid />
      </div>

      <div className="section">
        <OpeningTimeline />
      </div>

      <CommunityPerformanceTable />
    </>
  );
}

export default Dashboard;
