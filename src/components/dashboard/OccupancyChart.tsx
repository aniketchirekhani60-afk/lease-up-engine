import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { occupancyTrend } from "../../data/dashboardData";

function OccupancyChart() {
  return (
    <div className="card chart-card">
      <h2 className="chart-card-title">Occupancy Trend</h2>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={occupancyTrend}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="week" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="occupancy"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default OccupancyChart;