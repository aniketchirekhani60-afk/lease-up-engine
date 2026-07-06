export type ExecutiveKpi = {
  id: number;
  title: string;
  value: string;
  target: string;
  trend: string;
};

export const executiveKpis: ExecutiveKpi[] = [
  {
    id: 1,
    title: "Communities Opening",
    value: "2",
    target: "3 total",
    trend: "1 pre-opening",
  },
  {
    id: 2,
    title: "Average Occupancy",
    value: "62%",
    target: "90%",
    trend: "+6% MoM",
  },
  {
    id: 3,
    title: "Active Lease-Up Pipeline",
    value: "120",
    target: "leads",
    trend: "+18 this week",
  },
  {
    id: 4,
    title: "Communities At Risk",
    value: "1",
    target: "of 3",
    trend: "Bellevue",
  },
];

export type FunnelStage = {
  stage: string;
  count: number;
  percentOfLeads: number;
};

export const leaseUpFunnel: FunnelStage[] = [
  { stage: "Leads", count: 420, percentOfLeads: 100 },
  { stage: "Tours", count: 240, percentOfLeads: 57 },
  { stage: "Applications", count: 150, percentOfLeads: 36 },
  { stage: "Approvals", count: 110, percentOfLeads: 26 },
  { stage: "Move-ins", count: 90, percentOfLeads: 21 },
];

export type CommunityStatus = "On Track" | "Complete" | "Attention";
export type MarketingStatus = "Completed" | "Pending" | "Overdue";

export type CommunityHealth = {
  id: number;
  name: string;
  stage: string;
  occupancy: number;
  targetOccupancy: number;
  marketingStatus: MarketingStatus;
  leadPipeline: number;
  healthScore: number;
  openingDate: string;
  daysToOpening: number | null;
  status: CommunityStatus;
};

export const communityHealth: CommunityHealth[] = [
  {
    id: 1,
    name: "Issaquah",
    stage: "Lease-Up",
    occupancy: 72,
    targetOccupancy: 90,
    marketingStatus: "Completed",
    leadPipeline: 86,
    healthScore: 82,
    openingDate: "Apr 1, 2026",
    daysToOpening: null,
    status: "On Track",
  },
  {
    id: 2,
    name: "Waterfront",
    stage: "Stabilized",
    occupancy: 95,
    targetOccupancy: 95,
    marketingStatus: "Completed",
    leadPipeline: 12,
    healthScore: 96,
    openingDate: "Jan 15, 2025",
    daysToOpening: null,
    status: "Complete",
  },
  {
    id: 3,
    name: "Bellevue",
    stage: "Pre-Opening",
    occupancy: 18,
    targetOccupancy: 85,
    marketingStatus: "Overdue",
    leadPipeline: 34,
    healthScore: 54,
    openingDate: "Sep 15, 2026",
    daysToOpening: 71,
    status: "Attention",
  },
];

export type AlertSeverity = "critical" | "warning" | "success";

export type ExecutiveAlert = {
  id: number;
  severity: AlertSeverity;
  community: string;
  message: string;
  date: string;
};

export const executiveAlerts: ExecutiveAlert[] = [
  {
    id: 1,
    severity: "critical",
    community: "Bellevue",
    message: "Website not published with 71 days remaining until opening",
    date: "Jul 5, 2026",
  },
  {
    id: 2,
    severity: "warning",
    community: "Bellevue",
    message: "Marketing campaign delayed — no digital launch date set",
    date: "Jul 4, 2026",
  },
  {
    id: 3,
    severity: "warning",
    community: "Bellevue",
    message: "Occupancy pacing 15 points below target for this stage",
    date: "Jul 2, 2026",
  },
  {
    id: 4,
    severity: "success",
    community: "Waterfront",
    message: "Community stabilized — occupancy target reached",
    date: "Jun 28, 2026",
  },
];
