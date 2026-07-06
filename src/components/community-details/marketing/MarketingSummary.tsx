type MarketingSummaryProps = {
  completed: number;
  pending: number;
  completionPercent: number;
};

function MarketingSummary({
  completed,
  pending,
  completionPercent,
}: MarketingSummaryProps) {
  return (
    <div className="marketing-summary-grid">
      <div className="card kpi-card">
        <p className="kpi-label">Completed</p>
        <h2 className="kpi-value">{completed}</h2>
      </div>

      <div className="card kpi-card">
        <p className="kpi-label">Pending</p>
        <h2 className="kpi-value">{pending}</h2>
      </div>

      <div className="card kpi-card">
        <p className="kpi-label">Completion</p>
        <h2 className="kpi-value">{completionPercent}%</h2>
      </div>
    </div>
  );
}

export default MarketingSummary;
