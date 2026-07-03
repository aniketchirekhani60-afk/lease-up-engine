import { recentActivity } from "../../data/dashboardData";

function RecentActivity() {
  return (
    <div className="card">
      <h2 className="activity-card-title">Recent Activity</h2>

      {recentActivity.map((item, index) => (
        <div key={index} className="activity-item">
          <span className="activity-time">{item.time}</span>
          <p className="activity-text">{item.activity}</p>
        </div>
      ))}
    </div>
  );
}

export default RecentActivity;