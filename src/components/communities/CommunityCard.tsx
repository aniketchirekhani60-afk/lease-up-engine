import { useNavigate } from "react-router-dom";
import StatusBadge from "./StatusBadge";

type CommunityCardProps = {
  id: number;
  name: string;
  stage: string;
  occupancy: number;
  units: number;
  manager: string;
  status: string;
};

function CommunityCard({
  id,
  name,
  stage,
  occupancy,
  units,
  manager,
  status,
}: CommunityCardProps) {
  const navigate = useNavigate();

  return (
    <div className="card community-card">
      <div className="community-header">
        <div>
          <h3 className="community-name">{name}</h3>
          <p className="community-stage">{stage}</p>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="community-details-grid">
        <div>
          <p className="community-detail-label">Occupancy</p>
          <p className="community-detail-value">{occupancy}%</p>
        </div>

        <div>
          <p className="community-detail-label">Units</p>
          <p className="community-detail-value">{units}</p>
        </div>

        <div>
          <p className="community-detail-label">Community Manager</p>
          <p className="community-detail-value community-manager">
            {manager}
          </p>
        </div>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => navigate(`/communities/${id}`)}
      >
        View Details
      </button>
    </div>
  );
}

export default CommunityCard;
