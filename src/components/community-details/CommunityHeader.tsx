import { Link } from "react-router-dom";
import StatusBadge from "../communities/StatusBadge";
import type { Community } from "../../data/communitiesData";

type CommunityHeaderProps = {
  community: Community;
};

function CommunityHeader({ community }: CommunityHeaderProps) {
  return (
    <div className="section">
      <Link to="/communities" className="back-link">
        ← Back to Communities
      </Link>

      <div className="card community-card">
        <div className="community-header">
          <div>
            <h1 className="page-title">{community.name}</h1>
            <p className="community-stage">{community.stage}</p>
          </div>

          <StatusBadge status={community.status} />
        </div>

        <div className="community-details-grid">
          <div>
            <p className="community-detail-label">Occupancy</p>
            <p className="community-detail-value">{community.occupancy}%</p>
          </div>

          <div>
            <p className="community-detail-label">Units</p>
            <p className="community-detail-value">{community.units}</p>
          </div>

          <div>
            <p className="community-detail-label">Manager</p>
            <p className="community-detail-value community-manager">
              {community.manager}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityHeader;
