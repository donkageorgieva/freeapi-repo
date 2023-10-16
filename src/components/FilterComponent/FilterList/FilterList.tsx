import { getByCategoryAsync } from "../../../services/state/store/features/thunks/repository/getCategories";
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
  return (
    <div className="text-sm lg:text-base">
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
          //@ts-ignore
          itemComponent={FilterItem}
        ></List>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default FilterList;
