import { useEffect, useState } from "react";
import { IFreeApi } from "../../interfaces/IFreeApi";
import List from "../ui/List/List";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
// import { getAllRepoEntries } from "../../services/api/getAllRepoEntries";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";
import { mockedApis } from "../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import RepositoryItemSkeleton from "./RepositoryItem/RepositoryItemSkeleton/RepositoryItemSkeleton";
const RepositoryComponent = () => {
  const [data, setData] = useState<IFreeApi[] | null>(null);
  const [fetchData, isLoading, errorMessage] = usePublicApi(setData, "entries");
  useEffect(() => {
    // @ts-ignore
    fetchData();
  }, [setData]);

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Public APIs </h1>
      {isLoading && <h1>Loading</h1>}
      <section className="grid grid-cols-5 gap-2 p-4 bg-white shadow-lg rounded-lg mt-5">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Description</h2>
        <h2 className="font-bold">Auth</h2>
        <h2 className="font-bold">Https</h2>
        <h2 className="font-bold">Cors</h2>
      </section>

      {(data && data.length > 0) || isLoading ? (
        <List
          data-testid="list"
          data={data ? data : mockedApis}
          keyPropertyName={["Link", "API"]}
          //@ts-ignore
          itemComponent={data ? RepositoryItem : RepositoryItemSkeleton}
        />
      ) : (
        !isLoading && <h1>No data</h1>
      )}
      {errorMessage && <h1> Error </h1>}
    </>
  );
};

export default RepositoryComponent;
