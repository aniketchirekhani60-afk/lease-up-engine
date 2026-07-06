import type { Lead } from "../../../data/leadsData";

const STAGE_CLASS: Record<Lead["stage"], string> = {
  New: "status-pending",
  "Tour Scheduled": "status-lease-up",
  Application: "status-complete",
  Approved: "status-completed",
  "Move-In": "status-on-track",
  Lost: "badge-overdue",
};

type LeadCardProps = {
  lead: Lead;
  isSelected: boolean;
  onSelect: (leadId: number) => void;
};

function LeadCard({ lead, isSelected, onSelect }: LeadCardProps) {
  return (
    <button
      type="button"
      className={`card lead-card${isSelected ? " selected" : ""}`}
      onClick={() => onSelect(lead.id)}
    >
      <div className="lead-card-header">
        <span className="lead-card-name">{lead.name}</span>
        <span className={`status-badge ${STAGE_CLASS[lead.stage]}`}>
          {lead.stage}
        </span>
      </div>

      <p className="lead-card-meta">{lead.interestedIn}</p>
      <p className="lead-card-meta">
        {lead.source} · Move-in {lead.moveInTimeline}
      </p>
    </button>
  );
}

export default LeadCard;
