import { leaseUpFunnel } from "../../data/executiveDashboardData";

function LeaseUpFunnel() {
  return (
    <div className="card">
      <h2 className="chart-card-title">Lease-Up Funnel</h2>

      <div className="funnel-list">
        {leaseUpFunnel.map((stage) => (
          <div key={stage.stage}>
            <div className="funnel-stage-header">
              <span className="funnel-stage-name">{stage.stage}</span>
              <span>
                <span className="funnel-stage-count">{stage.count}</span>
                <span className="funnel-stage-percent">
                  {stage.percentOfLeads}%
                </span>
              </span>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${stage.percentOfLeads}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeaseUpFunnel;
