export const communitiesData = [
  {
    id: 1,
    name: "Issaquah",
    stage: "Lease-Up",
    occupancy: 72,
    opening: "July 2026",
    manager: "Sarah Johnson",
    units: 120,
    status: "On Track",
  },
  {
    id: 2,
    name: "Waterfront",
    stage: "Stabilized",
    occupancy: 95,
    opening: "Open",
    manager: "Michael Brown",
    units: 145,
    status: "Complete",
  },
  {
    id: 3,
    name: "Bellevue",
    stage: "Pre-Opening",
    occupancy: 18,
    opening: "September 2026",
    manager: "Emily Davis",
    units: 110,
    status: "Attention",
  },
];

export type Community = (typeof communitiesData)[number];