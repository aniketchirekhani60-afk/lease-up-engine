export type LeadStage =
  | "New"
  | "Tour Scheduled"
  | "Application"
  | "Approved"
  | "Move-In"
  | "Lost";

export type Lead = {
  id: number;
  communityId: number;
  name: string;
  stage: LeadStage;
  source: string;
  phone: string;
  email: string;
  interestedIn: string;
  moveInTimeline: string;
  assignedTo: string;
  lastContact: string;
  nextFollowUp: string;
  notes: string;
};

export const leadsData: Lead[] = [
  {
    id: 1,
    communityId: 1,
    name: "Barbara Ellison",
    stage: "Approved",
    source: "Website",
    phone: "(425) 555-0114",
    email: "barbara.ellison@example.com",
    interestedIn: "1-Bedroom Assisted Living",
    moveInTimeline: "0-30 days",
    assignedTo: "Sarah Johnson",
    lastContact: "Jul 3, 2026",
    nextFollowUp: "Jul 8, 2026",
    notes: "Family visiting this weekend to finalize paperwork.",
  },
  {
    id: 2,
    communityId: 1,
    name: "Robert Chen",
    stage: "Tour Scheduled",
    source: "Referral",
    phone: "(425) 555-0128",
    email: "robert.chen@example.com",
    interestedIn: "2-Bedroom Independent Living",
    moveInTimeline: "1-3 months",
    assignedTo: "Sarah Johnson",
    lastContact: "Jul 2, 2026",
    nextFollowUp: "Jul 9, 2026",
    notes: "Daughter coordinating tour, prefers weekday mornings.",
  },
  {
    id: 3,
    communityId: 1,
    name: "Linda Martinez",
    stage: "New",
    source: "Google Ads",
    phone: "(425) 555-0142",
    email: "linda.martinez@example.com",
    interestedIn: "Studio Assisted Living",
    moveInTimeline: "3-6 months",
    assignedTo: "Sarah Johnson",
    lastContact: "Jul 5, 2026",
    nextFollowUp: "Jul 7, 2026",
    notes: "Submitted inquiry form, not yet reached by phone.",
  },
  {
    id: 4,
    communityId: 1,
    name: "James Whitfield",
    stage: "Application",
    source: "Community Event",
    phone: "(425) 555-0156",
    email: "james.whitfield@example.com",
    interestedIn: "1-Bedroom Assisted Living",
    moveInTimeline: "0-30 days",
    assignedTo: "Sarah Johnson",
    lastContact: "Jul 4, 2026",
    nextFollowUp: "Jul 10, 2026",
    notes: "Application submitted, awaiting assessment scheduling.",
  },
  {
    id: 5,
    communityId: 1,
    name: "Nancy Ortiz",
    stage: "Move-In",
    source: "Website",
    phone: "(425) 555-0161",
    email: "nancy.ortiz@example.com",
    interestedIn: "2-Bedroom Independent Living",
    moveInTimeline: "Moved in",
    assignedTo: "Sarah Johnson",
    lastContact: "Jun 28, 2026",
    nextFollowUp: "-",
    notes: "Move-in completed, welcome package delivered.",
  },
  {
    id: 6,
    communityId: 1,
    name: "David Park",
    stage: "Lost",
    source: "Walk-in",
    phone: "(425) 555-0173",
    email: "david.park@example.com",
    interestedIn: "Studio Assisted Living",
    moveInTimeline: "-",
    assignedTo: "Sarah Johnson",
    lastContact: "Jun 20, 2026",
    nextFollowUp: "-",
    notes: "Chose a community closer to family in Portland.",
  },
  {
    id: 7,
    communityId: 2,
    name: "Evelyn Brooks",
    stage: "Tour Scheduled",
    source: "Referral",
    phone: "(206) 555-0188",
    email: "evelyn.brooks@example.com",
    interestedIn: "1-Bedroom Independent Living",
    moveInTimeline: "1-3 months",
    assignedTo: "Michael Brown",
    lastContact: "Jul 1, 2026",
    nextFollowUp: "Jul 6, 2026",
    notes: "Waitlist backfill for a recently vacated unit.",
  },
  {
    id: 8,
    communityId: 2,
    name: "Harold Simmons",
    stage: "New",
    source: "Website",
    phone: "(206) 555-0199",
    email: "harold.simmons@example.com",
    interestedIn: "Studio Independent Living",
    moveInTimeline: "3-6 months",
    assignedTo: "Michael Brown",
    lastContact: "Jul 5, 2026",
    nextFollowUp: "Jul 8, 2026",
    notes: "Inquiring about future availability.",
  },
  {
    id: 9,
    communityId: 3,
    name: "Susan Whitaker",
    stage: "New",
    source: "Community Event",
    phone: "(360) 555-0204",
    email: "susan.whitaker@example.com",
    interestedIn: "Assisted Living",
    moveInTimeline: "3-6 months",
    assignedTo: "Emily Davis",
    lastContact: "Jul 3, 2026",
    nextFollowUp: "Jul 9, 2026",
    notes: "Met at senior fair, requested a brochure.",
  },
  {
    id: 10,
    communityId: 3,
    name: "George Alvarez",
    stage: "New",
    source: "Referral",
    phone: "(360) 555-0217",
    email: "george.alvarez@example.com",
    interestedIn: "Memory Care",
    moveInTimeline: "0-30 days",
    assignedTo: "Emily Davis",
    lastContact: "Jul 4, 2026",
    nextFollowUp: "Jul 7, 2026",
    notes: "Urgent need, family requesting a callback this week.",
  },
  {
    id: 11,
    communityId: 3,
    name: "Patricia Nguyen",
    stage: "Tour Scheduled",
    source: "Website",
    phone: "(360) 555-0223",
    email: "patricia.nguyen@example.com",
    interestedIn: "1-Bedroom Assisted Living",
    moveInTimeline: "1-3 months",
    assignedTo: "Emily Davis",
    lastContact: "Jul 2, 2026",
    nextFollowUp: "Jul 11, 2026",
    notes: "First tour scheduled once the model unit is ready.",
  },
  {
    id: 12,
    communityId: 3,
    name: "Thomas Reed",
    stage: "Application",
    source: "Google Ads",
    phone: "(360) 555-0236",
    email: "thomas.reed@example.com",
    interestedIn: "Independent Living Cottage",
    moveInTimeline: "1-3 months",
    assignedTo: "Emily Davis",
    lastContact: "Jun 30, 2026",
    nextFollowUp: "Jul 6, 2026",
    notes: "Application in review, pending income verification.",
  },
];

export function getLeadsForCommunity(communityId: number): Lead[] {
  return leadsData.filter((lead) => lead.communityId === communityId);
}

export function filterLeadsByName(leads: Lead[], searchTerm: string): Lead[] {
  const term = searchTerm.trim().toLowerCase();
  if (!term) return leads;
  return leads.filter((lead) => lead.name.toLowerCase().includes(term));
}

export type PipelineStageSummary = {
  stage: LeadStage;
  count: number;
  percentOfTotal: number;
};

const PIPELINE_STAGES: LeadStage[] = [
  "New",
  "Tour Scheduled",
  "Application",
  "Approved",
  "Move-In",
];

export function getPipelineSummary(leads: Lead[]): PipelineStageSummary[] {
  const activeLeads = leads.filter((lead) => lead.stage !== "Lost");
  const total = activeLeads.length || 1;

  return PIPELINE_STAGES.map((stage) => {
    const count = activeLeads.filter((lead) => lead.stage === stage).length;
    return {
      stage,
      count,
      percentOfTotal: Math.round((count / total) * 100),
    };
  });
}
