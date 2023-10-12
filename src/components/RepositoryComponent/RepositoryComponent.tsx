import { useEffect, useState } from "react";
import { IFreeApi } from "../../interfaces/IFreeApi";
import { usePublicApi } from "../../hooks/api/usePublicApi/usePublicApi";

import RepositoryList from "./RepositoryList/RepositoryList";
const RepositoryComponent = () => {
  const [data, setData] = useState<IFreeApi[] | null>(null);
  const [fetchData, isLoading, errorMessage] = usePublicApi(setData, "entries");
  useEffect(() => {
    // @ts-ignore
    fetchData();
  }, [setData]);

  return (
    <RepositoryList
      data={data}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default RepositoryComponent;
