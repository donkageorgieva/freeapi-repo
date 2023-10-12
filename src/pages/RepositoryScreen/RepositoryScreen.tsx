import FilterComponent from "../../components/FilterComponent/FilterComponent";
import RepositoryComponent from "../../components/RepositoryComponent/RepositoryComponent";
import SplitScreen from "../../components/layout/SplitScreen/SplitScreen";

const RepositoryScreen = () => {
  return (
    <main className="md:container mx-auto py-10" data-testid="repo-screen">
      <SplitScreen
        left={FilterComponent}
        right={RepositoryComponent}
        rightWeight={5}
        responsive={true}
      />
    </main>
  );
};

export default RepositoryScreen;
