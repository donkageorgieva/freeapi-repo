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
    if (!window.sessionStorage.getItem("repository")) {
      dispatch(repoActions.getRepositoryAsync());
    } else {
      const items = window.sessionStorage.getItem("repository");
      if (items) {
        dispatch(repoActions.setApisFromStorage(JSON.parse(items)));
      }
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
