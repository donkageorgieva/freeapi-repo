import { useState } from "react";
import useScrollToTop from "../../../hooks/scrollToTop/useScrollToTop";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../../services/state/store/store";
import List from "../../ui/List/List";
import FilterItem from "./FilterItem/FilterItem";
import ChevronDown from "../../../assets/svgs/ChevronDown";
import { repoActions } from "../../../services/state/store/features/repositorySlice";

interface Props {
  isLoading: unknown;
  errorMessage: any;
  data: any;
  toggleExpand: () => void;
}

const FilterList = ({ data, toggleExpand }: Props) => {
  const [rotateChevron, setRotateChevron] = useState(false);
  const { scrollToTop } = useScrollToTop();
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(
    (state: RootState) => state.repository.filter
  );
  const onFilter = (item: any) => {
    if (currentFilter === item.category) return;
    if (!window.sessionStorage.getItem(item.category)) {
      dispatch(repoActions.getByCategoryAsync(item.category));
    } else {
      dispatch(repoActions.setFilterFromStorage(item.category));
    }

    scrollToTop();
    toggleExpand();
  };
  const onClearFilter = async () => {
    if (!currentFilter) return;
    if (!window.sessionStorage.getItem("repository")) {
      dispatch(repoActions.getRepositoryAsync());
    } else {
      dispatch(repoActions.setApisFromStorage());
    }

    toggleExpand();
  };

  return (
    <div
      className="text-sm lg:text-base flex flex-col   "
      data-testid="filter-list"
    >
      <div
        className="flex justify-between xl:justify-end "
        data-testid="expandable-filter"
        onClick={(event: any) => {
          event.stopPropagation();
          setRotateChevron(!rotateChevron);
          toggleExpand();
        }}
      >
        <h1 className="font-bold xl:hidden block">Filter By Category</h1>
        <button
          data-testid="chevron-button"
          className={[
            "block xl:hidden transition-all",
            rotateChevron ? "rotate-180" : "rotate-0",
          ].join(" ")}
        >
          <ChevronDown />
        </button>
      </div>

      <div className="py-4 xl:py-0 flex flex-col">
        <button
          data-testid="filter-btn"
          className="self-end text-indigo-500 hover:underline underline-offset-4 hover:font-bold transition-all decoration-4 mb-0 xl:mb-4"
          onClick={onClearFilter}
        >
          Clear Filter
        </button>
        <h1 className="font-bold hidden xl:block">Filter By Category</h1>
        {data && data.length > 0 ? (
          <List
            listClassnames="my-2 mr-4 md:mr-0 hover:cursor-pointer hover:text-indigo-500"
            classNames="xl:block py-4 xl:py-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-wrap"
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
