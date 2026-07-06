import { executiveKpis } from "../../data/executiveDashboardData";
import KpiCard from "./KpiCard";

function ExecutiveKpis() {
  return (
    <div className="dashboard-kpi-grid">
      {executiveKpis.map((kpi) => (
        <KpiCard
          key={kpi.id}
          title={kpi.title}
          value={kpi.value}
          target={kpi.target}
          trend={kpi.trend}
        />
      ))}
    </div>
  );
}

export default ExecutiveKpis;
