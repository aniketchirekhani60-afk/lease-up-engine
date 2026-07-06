import { communityHealth } from "../../data/executiveDashboardData";

const STATUS_CLASS: Record<string, string> = {
  "On Track": "status-on-track",
  Complete: "status-complete",
  Attention: "status-attention",
};

function CommunityPerformanceTable() {
  return (
    <div className="card">
      <h2 className="table-title">Community Performance</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Community</th>
            <th>Stage</th>
            <th>Opening Date</th>
            <th>Current Occupancy</th>
            <th>Target Occupancy</th>
            <th>Lead Pipeline</th>
            <th>Health</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {communityHealth.map((community) => (
            <tr key={community.id}>
              <td>{community.name}</td>
              <td>{community.stage}</td>
              <td>{community.openingDate}</td>
              <td>{community.occupancy}%</td>
              <td>{community.targetOccupancy}%</td>
              <td>{community.leadPipeline}</td>
              <td>{community.healthScore}</td>
              <td>
                <span
                  className={`status-badge ${STATUS_CLASS[community.status]}`}
                >
                  {community.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommunityPerformanceTable;
