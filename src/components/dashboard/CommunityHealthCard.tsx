import type { CommunityHealth } from "../../data/executiveDashboardData";

const STATUS_CLASS: Record<CommunityHealth["status"], string> = {
  "On Track": "status-on-track",
  Complete: "status-complete",
  Attention: "status-attention",
};

const MARKETING_CLASS: Record<CommunityHealth["marketingStatus"], string> = {
  Completed: "badge-completed",
  Pending: "badge-pending",
  Overdue: "badge-overdue",
};

type CommunityHealthCardProps = {
  community: CommunityHealth;
};

function CommunityHealthCard({ community }: CommunityHealthCardProps) {
  return (
    <div className="card health-card">
      <div className="health-card-header">
        <div>
          <h3 className="community-name">{community.name}</h3>
          <p className="community-stage">{community.stage}</p>
        </div>
        <span className={`status-badge ${STATUS_CLASS[community.status]}`}>
          {community.status}
        </span>
      </div>

      <div className="health-card-stats">
        <div>
          <p className="health-stat-label">Occupancy</p>
          <p className="health-stat-value">
            {community.occupancy}% / {community.targetOccupancy}%
          </p>
        </div>

        <div>
          <p className="health-stat-label">Health Score</p>
          <p className="health-stat-value">{community.healthScore}</p>
        </div>

        <div>
          <p className="health-stat-label">Marketing Status</p>
          <span
            className={`status-badge ${
              MARKETING_CLASS[community.marketingStatus]
            }`}
          >
            {community.marketingStatus}
          </span>
        </div>

        <div>
          <p className="health-stat-label">Lead Pipeline</p>
          <p className="health-stat-value">{community.leadPipeline}</p>
        </div>

        <div>
          <p className="health-stat-label">Opening Date</p>
          <p className="health-stat-value">{community.openingDate}</p>
        </div>
      </div>
    </div>
  );
}

export default CommunityHealthCard;
