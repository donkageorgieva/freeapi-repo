import { useEffect, useState } from "react";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
import FilterList from "./FilterList/FilterList";

const FilterComponent = () => {
  const [categories, setCategories] = useState<any>(null);

  const [fetchData, isLoading, errorMessage] = usePublicApi(
    setCategories,
    "categories"
  );
  // const [categories, setCategories] = useState<Array | null>(null)
  useEffect(() => {
    console.log("here");
    //@ts-ignore
    fetchData();
  }, []);
  return (
    <>
      <FilterList
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={categories}
      />
    </>
  );
};

export default FilterComponent;
