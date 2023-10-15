import { useEffect } from "react";
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from "../../services/state/store/store";
import { repoActions } from "../../services/state/store/features/repositorySlice";
import RepositoryList from "./RepositoryList/RepositoryList";

const RepositoryComponent = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector((state: RootState) => state.repository.apis);
  const isLoading = useAppSelector(
    (state: RootState) => state.repository.isLoading
  );
  // console.log(data, "DATA");
  const errorMessage = useAppSelector(
    (state: RootState) => state.repository.errorMessage
  );
  useEffect(() => {
    dispatch(repoActions.getRepositoryAsync());
  }, [dispatch]);

  return (
    <RepositoryList
      data={data}
      isLoading={isLoading}
      errorMessage={errorMessage}
    />
  );
};

export default RepositoryComponent;
