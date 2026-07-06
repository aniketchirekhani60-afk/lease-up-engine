import { executiveAlerts } from "../../data/executiveDashboardData";

function ExecutiveAlerts() {
  return (
    <div className="card">
      <h2 className="activity-card-title">Executive Alerts</h2>

      <div className="alert-list">
        {executiveAlerts.map((alert) => (
          <div key={alert.id} className={`alert-item severity-${alert.severity}`}>
            <p className="alert-message">{alert.message}</p>
            <p className="alert-meta">
              {alert.community} · {alert.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExecutiveAlerts;
