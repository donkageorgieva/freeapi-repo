import { useEffect, useState } from "react";
// import { IFreeApi } from "../../interfaces/IFreeApi";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";

import RepositoryList from "./RepositoryList/RepositoryList";
const RepositoryComponent = () => {
  const [data, setData] = useState<any>(null);
  const [fetchData, isLoading, errorMessage] = usePublicApi(setData, "entries");
  useEffect(() => {
    // @ts-ignore
    fetchData();
  }, []);

  return (
    <RepositoryList
      data={data && data.entries}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default RepositoryComponent;
