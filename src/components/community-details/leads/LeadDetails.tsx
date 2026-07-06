import type { Lead } from "../../../data/leadsData";

const STAGE_CLASS: Record<Lead["stage"], string> = {
  New: "status-pending",
  "Tour Scheduled": "status-lease-up",
  Application: "status-complete",
  Approved: "status-completed",
  "Move-In": "status-on-track",
  Lost: "badge-overdue",
};

type LeadDetailsProps = {
  lead: Lead | null;
};

function LeadDetails({ lead }: LeadDetailsProps) {
  if (!lead) {
    return (
      <div className="card">
        <p className="placeholder-text">Select a lead to view details.</p>
      </div>
    );
  }

  return (
    <div className="card">
      <div className="lead-detail-header">
        <div>
          <h3 className="community-name">{lead.name}</h3>
          <p className="community-stage">{lead.interestedIn}</p>
        </div>
        <span className={`status-badge ${STAGE_CLASS[lead.stage]}`}>
          {lead.stage}
        </span>
      </div>

      <div className="lead-detail-grid">
        <div>
          <p className="lead-detail-label">Phone</p>
          <p className="lead-detail-value">{lead.phone}</p>
        </div>

        <div>
          <p className="lead-detail-label">Email</p>
          <p className="lead-detail-value">{lead.email}</p>
        </div>

        <div>
          <p className="lead-detail-label">Source</p>
          <p className="lead-detail-value">{lead.source}</p>
        </div>

        <div>
          <p className="lead-detail-label">Move-In Timeline</p>
          <p className="lead-detail-value">{lead.moveInTimeline}</p>
        </div>

        <div>
          <p className="lead-detail-label">Assigned To</p>
          <p className="lead-detail-value">{lead.assignedTo}</p>
        </div>

        <div>
          <p className="lead-detail-label">Last Contact</p>
          <p className="lead-detail-value">{lead.lastContact}</p>
        </div>

        <div>
          <p className="lead-detail-label">Next Follow-Up</p>
          <p className="lead-detail-value">{lead.nextFollowUp}</p>
        </div>
      </div>

      <div className="lead-detail-notes">
        <p className="lead-detail-label">Notes</p>
        <p className="lead-detail-value">{lead.notes}</p>
      </div>
    </div>
  );
}

export default LeadDetails;
