import List from "../../ui/List/List";
import FilterItem from "./FilterItem/FilterItem";

interface Props {
  isLoading: unknown;
  errorMessage: any;
  data: any;
}

const FilterList = ({ data }: Props) => {
  const onFilter = (item: any) => {};
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
