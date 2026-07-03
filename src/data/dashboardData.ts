export const kpiData = [
  {
    id: 1,
    title: "Occupancy",
    value: 72,
    unit: "%",
    target: "95%",
    trend: "+4%",
  },
  {
    id: 2,
    title: "Active Leads",
    value: 214,
    unit: "",
    target: "250",
    trend: "+18",
  },
  {
    id: 3,
    title: "Tours Scheduled",
    value: 41,
    unit: "",
    target: "60",
    trend: "+8",
  },
  {
    id: 4,
    title: "Move-ins",
    value: 18,
    unit: "",
    target: "25",
    trend: "+3",
  },
];

export const communities = [
  {
    id: 1,
    name: "Issaquah",
    stage: "Lease-Up",
    occupancy: 72,
    opening: "July 2026",
    status: "On Track",
  },
  {
    id: 2,
    name: "Waterfront",
    stage: "Stabilized",
    occupancy: 95,
    opening: "Open",
    status: "Complete",
  },
  {
    id: 3,
    name: "Bellevue",
    stage: "Pre-Opening",
    occupancy: 18,
    opening: "September 2026",
    status: "Attention",
  },
];

export const occupancyTrend = [
  { week: "W1", occupancy: 48 },
  { week: "W2", occupancy: 56 },
  { week: "W3", occupancy: 63 },
  { week: "W4", occupancy: 72 },
];

export const recentActivity = [
  {
    time: "09:45 AM",
    activity: "New lead added for Issaquah",
  },
  {
    time: "10:15 AM",
    activity: "Tour scheduled",
  },
  {
    time: "11:30 AM",
    activity: "Move-in completed",
  },
];