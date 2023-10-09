import { useEffect, useState } from "react";
import axios from "axios";
import { IFreeApi } from "../../interfaces/IFreeApi";
import List from "../ui/List/List";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
const RepositoryComponent = () => {
  const [data, setData] = useState<IFreeApi[]>([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_PUBLIC_API_BASE_URL}entries`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((response) => response)
      .then((result: any) => {
        setData(result.data.entries);
      });
  }, [setData]);

  return (
    data.length > 0 && (
      <List
        data={data}
        keyPropertyName={["Link", "API"]}
        itemComponent={RepositoryItem}
      />
    )
  );
};

export default RepositoryComponent;
