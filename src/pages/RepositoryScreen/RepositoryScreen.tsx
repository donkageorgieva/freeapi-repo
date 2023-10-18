import FilterComponent from "../../components/FilterComponent/FilterComponent";
import RepositoryComponent from "../../components/RepositoryComponent/RepositoryComponent";
import SplitScreen from "../../components/layout/SplitScreen/SplitScreen";

const RepositoryScreen = () => {
  return (
    <main
      className="md:container mx-auto py-20 my-10 top-0 rounded-e-md"
      data-testid="repo-screen"
    >
      <SplitScreen
        left={FilterComponent}
        right={RepositoryComponent}
        responsive={true}
        rightWeight="80%"
      />
    </main>
  );
};

export default RepositoryScreen;
