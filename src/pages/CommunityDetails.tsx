import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { communitiesData } from "../data/communitiesData";
import { marketingData } from "../data/marketingData";
import {
  getLeadsForCommunity,
  filterLeadsByName,
} from "../data/leadsData";
import CommunityHeader from "../components/community-details/CommunityHeader";
import CommunityTabs from "../components/community-details/CommunityTabs";
import OverviewPanel from "../components/community-details/OverviewPanel";
import MarketingChecklist from "../components/community-details/marketing/MarketingChecklist";
import LeadPipeline from "../components/community-details/leads/LeadPipeline";
import LeadSearch from "../components/community-details/leads/LeadSearch";
import LeadList from "../components/community-details/leads/LeadList";
import LeadDetails from "../components/community-details/leads/LeadDetails";

function CommunityDetails() {
  const { id } = useParams<{ id: string }>();
  const community = communitiesData.find((item) => item.id === Number(id));
  const [activeTab, setActiveTab] = useState("Overview");
  const [leadSearch, setLeadSearch] = useState("");
  const [selectedLeadId, setSelectedLeadId] = useState<number | null>(null);

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

  const communityLeads = getLeadsForCommunity(community.id);
  const filteredLeads = filterLeadsByName(communityLeads, leadSearch);
  const selectedLead =
    filteredLeads.find((lead) => lead.id === selectedLeadId) ??
    filteredLeads[0] ??
    null;

  return (
    <>
      <CommunityHeader community={community} />
      <CommunityTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {activeTab === "Overview" && <OverviewPanel community={community} />}
      {activeTab === "Marketing" && (
        <MarketingChecklist tasks={marketingData} />
      )}
      {activeTab === "Leads" && (
        <>
          <div className="section">
            <LeadPipeline leads={communityLeads} />
          </div>

          <div className="two-column">
            <div>
              <div className="section">
                <LeadSearch value={leadSearch} onChange={setLeadSearch} />
              </div>
              <LeadList
                leads={filteredLeads}
                selectedLeadId={selectedLead?.id ?? null}
                onSelectLead={setSelectedLeadId}
              />
            </div>

            <LeadDetails lead={selectedLead} />
          </div>
        </>
      )}
    </>
  );
}

export default CommunityDetails;
