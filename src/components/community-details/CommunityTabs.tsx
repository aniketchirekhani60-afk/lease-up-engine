const TABS = ["Overview", "Marketing", "Leads", "Tours", "Move-ins", "Reports"];
const ENABLED_TABS = ["Overview", "Marketing", "Leads"];

type CommunityTabsProps = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

function CommunityTabs({ activeTab, onTabChange }: CommunityTabsProps) {
  return (
    <div className="community-tabs">
      {TABS.map((tab) => {
        const isEnabled = ENABLED_TABS.includes(tab);

        return (
          <button
            key={tab}
            type="button"
            className={tab === activeTab ? "tab active" : "tab"}
            disabled={!isEnabled}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}

export default CommunityTabs;
