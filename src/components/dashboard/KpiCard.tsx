type KpiCardProps = {
  title: string;
  value: string;
  target: string;
  trend: string;
};

function KpiCard({ title, value, target, trend }: KpiCardProps) {
  return (
    <div className="card kpi-card">
      <h3 className="kpi-label">{title}</h3>

      <h1 className="kpi-value">{value}</h1>

      <div className="kpi-footer">
        <span className="kpi-trend">{trend}</span>
        <span className="kpi-target">Target {target}</span>
      </div>
    </div>
  );
}

export default KpiCard;