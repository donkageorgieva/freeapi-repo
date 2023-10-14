import { useEffect, useState } from "react";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
import FilterList from "./FilterList/FilterList";
import Card from "../ui/Card/Card";

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
