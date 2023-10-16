import { getByCategoryAsync } from "../../../services/state/store/features/thunks/repository/getCategories";
import { useAppDispatch } from "../../../services/state/store/store";
import List from "../../ui/List/List";
import FilterItem from "./FilterItem/FilterItem";

interface Props {
  isLoading: unknown;
  errorMessage: any;
  data: any;
}

const FilterList = ({ data }: Props) => {
  const dispatch = useAppDispatch();
  const onFilter = (item: any) => {
    dispatch(getByCategoryAsync(item.category));
  };
  return (
    <div>
      {data && data.length > 0 ? (
        <List
          listClassnames="my-2 hover:cursor-pointer hover:text-indigo-500"
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
