import { useEffect, useState } from "react";
import { IFreeApi } from "../../interfaces/IFreeApi";
import List from "../ui/List/List";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import { getAllRepoEntries } from "../../services/api/getAllRepoEntries";
const RepositoryComponent = () => {
  const [data, setData] = useState<IFreeApi[]>([]);
  useEffect(() => {
    getAllRepoEntries(setData);
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
