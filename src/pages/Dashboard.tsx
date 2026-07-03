import OccupancyChart from "../components/dashboard/OccupancyChart";
import RecentActivity from "../components/dashboard/RecentActivity";
import CommunityTable from "../components/dashboard/CommunityTable";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import KpiCard from "../components/dashboard/KpiCard";
import { kpiData } from "../data/dashboardData";

function Dashboard() {
  return (
    <>
      <DashboardHeader />

      <div className="dashboard-kpi-grid">
        {kpiData.map((item) => (
          <KpiCard
            key={item.id}
            title={item.title}
            value={`${item.value}${item.unit}`}
            target={item.target}
            trend={item.trend}
          />
        ))}
      </div>

      <div className="dashboard-charts-grid">
        <OccupancyChart />
        <RecentActivity />
      </div>

      <CommunityTable />
    </>
  );
}

export default Dashboard;