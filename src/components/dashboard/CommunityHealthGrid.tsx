import { communityHealth } from "../../data/executiveDashboardData";
import CommunityHealthCard from "./CommunityHealthCard";

function CommunityHealthGrid() {
  return (
    <div className="health-grid">
      {communityHealth.map((community) => (
        <CommunityHealthCard key={community.id} community={community} />
      ))}
    </div>
  );
}

export default CommunityHealthGrid;
