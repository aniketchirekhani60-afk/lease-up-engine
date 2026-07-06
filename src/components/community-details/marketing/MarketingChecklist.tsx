import type { MarketingTaskItem } from "../../../data/marketingData";
import MarketingSummary from "./MarketingSummary";
import MarketingTask from "./MarketingTask";

type MarketingChecklistProps = {
  tasks: MarketingTaskItem[];
};

function MarketingChecklist({ tasks }: MarketingChecklistProps) {
  const completedTasks = tasks.filter((task) => task.completed);
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completionPercent = tasks.length
    ? Math.round((completedTasks.length / tasks.length) * 100)
    : 0;

  return (
    <>
      <MarketingSummary
        completed={completedTasks.length}
        pending={pendingTasks.length}
        completionPercent={completionPercent}
      />

      <div className="checklist-section">
        <h2 className="checklist-section-title">Completed Tasks</h2>
        <div className="checklist">
          {completedTasks.length ? (
            completedTasks.map((task) => (
              <MarketingTask key={task.id} task={task} />
            ))
          ) : (
            <p className="placeholder-text">No completed tasks yet.</p>
          )}
        </div>
      </div>

      <div className="checklist-section">
        <h2 className="checklist-section-title">Pending Tasks</h2>
        <div className="checklist">
          {pendingTasks.length ? (
            pendingTasks.map((task) => (
              <MarketingTask key={task.id} task={task} />
            ))
          ) : (
            <p className="placeholder-text">No pending tasks.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default MarketingChecklist;
