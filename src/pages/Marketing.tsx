import { marketingData } from "../data/marketingData";
import MarketingChecklist from "../components/community-details/marketing/MarketingChecklist";

function Marketing() {
  return (
    <>
      <div className="section">
        <h1 className="page-title">Marketing</h1>
        <p className="page-subtitle">
          Track marketing task progress across all communities.
        </p>
      </div>

      <MarketingChecklist tasks={marketingData} />
    </>
  );
}

export default Marketing;
