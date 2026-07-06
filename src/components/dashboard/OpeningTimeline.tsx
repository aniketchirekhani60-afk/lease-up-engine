import { communityHealth } from "../../data/executiveDashboardData";
import OpeningTimelineItem from "./OpeningTimelineItem";

const openingCommunities = communityHealth.filter(
  (community) => community.stage !== "Stabilized"
);

function OpeningTimeline() {
  return (
    <div className="card">
      <h2 className="activity-card-title">Opening Timeline</h2>

      <div className="timeline-list">
        {openingCommunities.map((community) => (
          <OpeningTimelineItem key={community.id} community={community} />
        ))}
      </div>
    </div>
  );
}

export default OpeningTimeline;
