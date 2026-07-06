import type { CommunityHealth } from "../../data/executiveDashboardData";

type OpeningTimelineItemProps = {
  community: CommunityHealth;
};

function OpeningTimelineItem({ community }: OpeningTimelineItemProps) {
  const progressPercent = Math.min(
    100,
    Math.round((community.occupancy / community.targetOccupancy) * 100)
  );

  return (
    <div>
      <div className="timeline-item-header">
        <span className="timeline-community-name">{community.name}</span>
        <span className="timeline-days">
          {community.daysToOpening !== null
            ? `Opening in ${community.daysToOpening} Days`
            : "Now Leasing"}
        </span>
      </div>

      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${progressPercent}%` }} />
      </div>

      <p className="timeline-caption">
        {progressPercent}% toward {community.targetOccupancy}% occupancy target
      </p>
    </div>
  );
}

export default OpeningTimelineItem;
