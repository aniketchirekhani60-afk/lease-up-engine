type StatusBadgeProps = {
  status: string;
};

const STATUS_CLASSES: Record<string, string> = {
  "On Track": "status-on-track",
  Complete: "status-complete",
  Attention: "status-attention",
};

function StatusBadge({ status }: StatusBadgeProps) {
  const statusClass = STATUS_CLASSES[status] ?? "";

  return <span className={`status-badge ${statusClass}`}>{status}</span>;
}

export default StatusBadge;