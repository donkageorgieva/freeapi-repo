import { useEffect } from "react";
import { useAppDispatch } from "../../services/state/store/store";
import { repoActions } from "../../services/state/store/features/repositorySlice";

const RepositoryComponent = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(repoActions.getRepositoryAsync());
  }, []);

  return (
    <></>
    // <RepositoryList
    //   data={data && data.entries}
    //   isLoading={isLoading}
    //   errorMessage={errorMessage}
    // />
  );
};

export default RepositoryComponent;
