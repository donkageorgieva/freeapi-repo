import { useEffect } from "react";
import FilterList from "./FilterList/FilterList";
import Card from "../ui/Card/Card";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../services/state/store/store";
import { repoActions } from "../../services/state/store/features/repositorySlice";

const FilterComponent = () => {
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

  useEffect(() => {
    dispatch(repoActions.getCategoriesAsync());
  }, [dispatch]);

  return (
    <Card classNames="mr-auto xl:mr-8">
      <FilterList
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={categories}
      />
    </Card>
  );
};

export default FilterComponent;
