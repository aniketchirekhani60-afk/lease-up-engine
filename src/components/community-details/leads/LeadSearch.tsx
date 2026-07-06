type LeadSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

function LeadSearch({ value, onChange }: LeadSearchProps) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search leads by name..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default LeadSearch;
