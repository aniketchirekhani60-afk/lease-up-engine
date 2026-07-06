export type MarketingTaskItem = {
  id: number;
  title: string;
  completed: boolean;
  owner: string;
  dueDate: string;
};

export const marketingData: MarketingTaskItem[] = [
  {
    id: 1,
    title: "Website Published",
    completed: true,
    owner: "Marketing Team",
    dueDate: "2026-08-15",
  },
  {
    id: 2,
    title: "Google Business Profile",
    completed: false,
    owner: "SEO Team",
    dueDate: "2026-08-20",
  },
  {
    id: 3,
    title: "Photography Uploaded",
    completed: true,
    owner: "Creative Team",
    dueDate: "2026-08-18",
  },
  {
    id: 4,
    title: "Facebook Campaign",
    completed: false,
    owner: "Digital Marketing",
    dueDate: "2026-08-25",
  },
];
