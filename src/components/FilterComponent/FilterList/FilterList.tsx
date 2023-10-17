import { getByCategoryAsync } from "../../../services/state/store/features/thunks/repository/getCategories";
import { getRepositoryAsync } from "../../../services/state/store/features/thunks/repository/getRepository";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../services/state/store/store";
import List from "../../ui/List/List";
import FilterItem from "./FilterItem/FilterItem";

interface Props {
  isLoading: unknown;
  errorMessage: any;
  data: any;
}

const FilterList = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(
    (state: RootState) => state.repository.filter
  );
  const onFilter = (item: any) => {
    if (currentFilter === item.category) return;
    dispatch(getByCategoryAsync(item.category));
  };
  const onClearFilter = async () => {
    if (!currentFilter) return;
    dispatch(getRepositoryAsync());
  };
  return (
    <div className="text-sm lg:text-base flex flex-col">
      <button
        data-testid="filter-btn"
        className="self-end text-indigo-500 hover:underline underline-offset-4 hover:font-bold transition-all decoration-4"
        onClick={onClearFilter}
      >
        Clear Filter
      </button>
      <div className="py-4">
        <h1 className="font-bold">Filter By Category</h1>
        {data && data.length > 0 ? (
          <List
            listClassnames="my-2 mr-4 md:mr-0 hover:cursor-pointer hover:text-indigo-500"
            classNames="flex flex-wrap xl:block py-4 xl:py-0"
            handleClick={onFilter}
            data={data.map((data: string) => {
              return {
                category: data,
              };
            })}
            itemComponent={FilterItem}
          ></List>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

export default FilterList;
