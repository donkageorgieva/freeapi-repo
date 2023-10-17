import {
  RootState,
  useAppSelector,
} from "../../../../services/state/store/store";

interface Props {
  category: string;
  active?: any;
}

const FilterItem = ({ category }: Props) => {
  const activeFilter = useAppSelector(
    (state: RootState) => state.repository.filter
  );
  return (
    <div
      data-testid="filter-item"
      className={`${
        activeFilter && activeFilter === category && "text-indigo-500"
      }`}
    >
      <h4>{category}</h4>
    </div>
  );
};

export default FilterItem;
