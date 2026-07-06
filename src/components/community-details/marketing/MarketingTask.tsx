import type { MarketingTaskItem } from "../../../data/marketingData";

type MarketingTaskProps = {
  task: MarketingTaskItem;
};

function getBadge(task: MarketingTaskItem) {
  if (task.completed) {
    return { label: "Completed", className: "badge-completed" };
  }

  const isOverdue = new Date(task.dueDate) < new Date();
  return isOverdue
    ? { label: "Overdue", className: "badge-overdue" }
    : { label: "Pending", className: "badge-pending" };
}

function MarketingTask({ task }: MarketingTaskProps) {
  const badge = getBadge(task);

  return (
    <div className="card task-row">
      <div className="task-main">
        <span
          className={`task-status-icon ${task.completed ? "completed" : ""}`}
        >
          {task.completed ? "✓" : ""}
        </span>

        <div>
          <p className="task-title">{task.title}</p>
          <p className="task-meta">
            {task.owner} · Due {task.dueDate}
          </p>
        </div>
      </div>

      <span className={`status-badge ${badge.className}`}>{badge.label}</span>
    </div>
  );
}

export default MarketingTask;
