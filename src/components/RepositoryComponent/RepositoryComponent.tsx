import { useEffect, useState } from "react";
import { IFreeApi } from "../../interfaces/IFreeApi";
import List from "../ui/List/List";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
// import { getAllRepoEntries } from "../../services/api/getAllRepoEntries";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
const RepositoryComponent = () => {
  const [data, setData] = useState<IFreeApi[]>([]);
  const [fetchData, isLoading, errorMessage] = usePublicApi(setData, "entries");
  useEffect(() => {
    // @ts-ignore
    fetchData();
  }, [setData]);

  return (
    <>
      <h1>Public APIs </h1>
      {data.length > 0 ? (
        <List
          data={data}
          keyPropertyName={["Link", "API"]}
          itemComponent={RepositoryItem}
        />
      ) : (
        <p>No data</p>
      )}
    </>
  );
};

export default RepositoryComponent;
