import { useParams, Link } from "react-router-dom";
import { communitiesData } from "../data/communitiesData";
import CommunityHeader from "../components/community-details/CommunityHeader";
import CommunityTabs from "../components/community-details/CommunityTabs";
import OverviewPanel from "../components/community-details/OverviewPanel";

function CommunityDetails() {
  const { id } = useParams<{ id: string }>();
  const community = communitiesData.find((item) => item.id === Number(id));

  if (!community) {
    return (
      <div className="section">
        <Link to="/communities" className="back-link">
          ← Back to Communities
        </Link>
        <p>Community not found.</p>
      </div>
    );
  }

  return (
    <>
      <CommunityHeader community={community} />
      <CommunityTabs />
      <OverviewPanel community={community} />
    </>
  );
}

export default CommunityDetails;
