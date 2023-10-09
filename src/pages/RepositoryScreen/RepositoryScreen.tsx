import FilterComponent from "../../components/FilterComponent/FilterComponent";
import RepositoryComponent from "../../components/RepositoryComponent/RepositoryComponent";
import SplitScreen from "../../components/layout/SplitScreen/SplitScreen";

const RepositoryScreen = () => {
  return (
    <SplitScreen
      left={FilterComponent}
      right={RepositoryComponent}
      rightWeight={5}
      responsive={true}
    />
  );
};

export default RepositoryScreen;
