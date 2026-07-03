import { communitiesData } from "../../data/communitiesData";
import CommunityCard from "./CommunityCard";

function CommunityList() {
  return (
    <div>
      {communitiesData.map((community) => (
        <CommunityCard
          key={community.id}
          name={community.name}
          stage={community.stage}
          occupancy={community.occupancy}
          units={community.units}
          manager={community.manager}
          status={community.status}
        />
      ))}
    </div>
  );
}

export default CommunityList;
