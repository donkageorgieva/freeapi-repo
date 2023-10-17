import { useEffect, useState } from "react";
import FilterList from "./FilterList/FilterList";
import Card from "../ui/Card/Card";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../services/state/store/store";
import { repoActions } from "../../services/state/store/features/repositorySlice";

const FilterComponent = () => {
  const [expand, setExpand] = useState(false);
  const categories = useAppSelector(
    (state: RootState) => state.repository.categories
  );
  const isLoading = useAppSelector(
    (state: RootState) => state.repository.isLoading
  );
  const errorMessage = useAppSelector(
    (state: RootState) => state.repository.errorMessage
  );
  const dispatch = useAppDispatch();
  const handleExpand = () => {
    setExpand(!expand);
  };
  useEffect(() => {
    dispatch(repoActions.getCategoriesAsync());
  }, [dispatch]);

  return (
    <Card
      dataTestId="filter-card"
      classNames={`mr-auto xl:mr-8 overflow-hidden xl:h-fit cursor-pointer xl:cursor-default transition-height ${
        !expand ? "h-12" : "h-fit"
      }`}
    >
      <FilterList
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={categories}
        toggleExpand={handleExpand}
      />
    </Card>
  );
};

export default FilterComponent;
