import { useEffect, useState } from "react";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
import FilterList from "./FilterList/FilterList";
import Card from "../ui/Card/Card";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../services/state/store/store";
import { repoActions } from "../../services/state/store/features/repositorySlice";

const FilterComponent = () => {
  // const [categories, setCategories] = useState<any>(null);
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
