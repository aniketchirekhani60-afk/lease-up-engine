import type { Lead } from "../../../data/leadsData";
import LeadCard from "./LeadCard";

type LeadListProps = {
  leads: Lead[];
  selectedLeadId: number | null;
  onSelectLead: (leadId: number) => void;
};

function LeadList({ leads, selectedLeadId, onSelectLead }: LeadListProps) {
  return (
    <div className="lead-list">
      {leads.length ? (
        leads.map((lead) => (
          <LeadCard
            key={lead.id}
            lead={lead}
            isSelected={lead.id === selectedLeadId}
            onSelect={onSelectLead}
          />
        ))
      ) : (
        <p className="placeholder-text">No leads match your search.</p>
      )}
    </div>
  );
}

export default LeadList;
