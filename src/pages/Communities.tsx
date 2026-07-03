import CommunityList from "../components/communities/CommunityList";
import SearchBar from "../components/communities/SearchBar";

function Communities() {
  return (
    <>
      <div className="section">
        <h1 className="page-title">Communities</h1>
        <p className="page-subtitle">
          Manage lease-up progress across all communities.
        </p>
      </div>

      <SearchBar />

      <CommunityList />
    </>
  );
}

export default Communities;
