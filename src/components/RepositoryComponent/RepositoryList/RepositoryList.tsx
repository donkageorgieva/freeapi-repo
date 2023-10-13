import List from "../../ui/List/List";
import { IFreeApi } from "../../../interfaces/IFreeApi";
import { mockedApis } from "../../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import RepositoryItemSkeleton from "../RepositoryItem/RepositoryItemSkeleton/RepositoryItemSkeleton";
import styles from "./RepositoryList.module.scss";
interface Props {
  data: IFreeApi[] | null;
  isLoading: any;
  errorMessage: any;
}

const RepositoryList = ({ data, isLoading, errorMessage }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold mb-2" data-testid="public-api-list">
        Public APIs{" "}
      </h1>
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
          data={data ? data : mockedApis}
          keyPropertyName={["Link", "API"]}
          //@ts-ignore
          itemComponent={data ? RepositoryItem : RepositoryItemSkeleton}
        />
      ) : (
        !isLoading && <h1>No data</h1>
      )}
      {errorMessage && <h1> Error </h1>}
    </div>
  );
};

export default RepositoryList;
