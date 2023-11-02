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

  const errorMessage = useAppSelector(
    (state: RootState) => state.repository.errorMessage
  );
  useEffect(() => {
    const savedRepository = window.sessionStorage.getItem("repository");
    const savedFilter = window.sessionStorage.getItem("filter");
    if (!savedFilter) {
      !savedRepository
        ? dispatch(repoActions.getRepositoryAsync())
        : dispatch(repoActions.setApisFromStorage());
    } else {
      dispatch(repoActions.setFilterFromStorage(savedFilter));
    }
  }, []);

  return (
    <div className="text-sm lg:text-base">
      <RepositoryList
        data={data}
        isLoading={isLoading}
        errorMessage={errorMessage}
      />
    </div>
  );
};

export default RepositoryComponent;
