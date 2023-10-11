import { useEffect, useState } from "react";
import { IFreeApi } from "../../interfaces/IFreeApi";
import List from "../ui/List/List";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
// import { getAllRepoEntries } from "../../services/api/getAllRepoEntries";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
const RepositoryComponent = () => {
  const [data, setData] = useState<IFreeApi[] | null>(null);
  const [fetchData, isLoading, errorMessage] = usePublicApi(setData, "entries");
  useEffect(() => {
    // @ts-ignore
    fetchData();
  }, [setData]);

  return (
    <>
      <h1>Public APIs </h1>
      {isLoading && <h1>Loading</h1>}
      {!isLoading && data && data.length > 0 ? (
        <List
          data={data}
          keyPropertyName={["Link", "API"]}
          itemComponent={RepositoryItem}
        />
      ) : (
        !isLoading && <h1>No data</h1>
      )}
    </>
  );
};

export default RepositoryComponent;
