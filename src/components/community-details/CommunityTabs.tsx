const TABS = ["Overview", "Marketing", "Leads", "Tours", "Move-ins", "Reports"];

function CommunityTabs() {
  return (
    <div className="community-tabs">
      {TABS.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={index === 0 ? "tab active" : "tab"}
          disabled={index !== 0}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default CommunityTabs;
