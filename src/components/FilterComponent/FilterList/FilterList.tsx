import List from "../../ui/List/List";
import FilterItem from "./FilterItem/FilterItem";
import styles from "./FilterList.module.scss";
interface Props {
  isLoading: unknown;
  errorMessage: any;
  data: any;
}

const FilterList = ({ data }: Props) => {
  const onFilter = (item: any) => {};
  return (
    <div className={styles["filter-list"]}>
      {data && data.categories.length > 0 ? (
        <List
          handleClick={onFilter}
          data={data.categories.map((data: string) => {
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
