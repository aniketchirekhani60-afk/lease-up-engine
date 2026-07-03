import StatusBadge from "../communities/StatusBadge";
import type { Community } from "../../data/communitiesData";

type OverviewPanelProps = {
  community: Community;
};

function OverviewPanel({ community }: OverviewPanelProps) {
  return (
    <>
      <div className="overview-grid">
        <div className="card kpi-card">
          <p className="kpi-label">Occupancy</p>
          <h2 className="kpi-value">{community.occupancy}%</h2>
        </div>

        <div className="card kpi-card">
          <p className="kpi-label">Current Stage</p>
          <h2 className="kpi-value kpi-value--sm">{community.stage}</h2>
        </div>

        <div className="card kpi-card">
          <p className="kpi-label">Manager</p>
          <h2 className="kpi-value kpi-value--sm">{community.manager}</h2>
        </div>

        <div className="card kpi-card">
          <p className="kpi-label">Units</p>
          <h2 className="kpi-value">{community.units}</h2>
        </div>

        {community.opening && (
          <div className="card kpi-card">
            <p className="kpi-label">Opening Date</p>
            <h2 className="kpi-value kpi-value--sm">{community.opening}</h2>
          </div>
        )}

        <div className="card kpi-card">
          <p className="kpi-label">Status</p>
          <StatusBadge status={community.status} />
        </div>
      </div>

      <div className="overview-secondary-grid">
        <div className="card">
          <h2 className="chart-card-title">Lease-Up Progress</h2>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${community.occupancy}%` }}
            />
          </div>
          <p className="placeholder-text progress-label">
            {community.occupancy}% occupied
          </p>
        </div>

        <div className="card">
          <h2 className="chart-card-title">Upcoming Tasks</h2>
          <p className="placeholder-text">No upcoming tasks yet.</p>
        </div>

        <div className="card">
          <h2 className="chart-card-title">Recent Activity</h2>
          <p className="placeholder-text">
            No recent activity for this community yet.
          </p>
        </div>
      </div>
    </>
  );
}

export default OverviewPanel;
