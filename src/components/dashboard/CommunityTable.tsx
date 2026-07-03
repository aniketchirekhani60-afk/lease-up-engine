import { communities } from "../../data/dashboardData";

function CommunityTable() {
  return (
    <div className="card">
      <h2 className="table-title">Community Status</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Community</th>
            <th>Stage</th>
            <th>Occupancy</th>
            <th>Opening</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {communities.map((community) => (
            <tr key={community.name}>
              <td>{community.name}</td>
              <td>{community.stage}</td>
              <td>{community.occupancy}</td>
              <td>{community.opening}</td>
              <td>{community.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CommunityTable;
