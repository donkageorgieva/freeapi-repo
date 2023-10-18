import List from "../../ui/List/List";
import { IFreeApi } from "../../../interfaces/IFreeApi";
import { mockedApis } from "../../../utils/mocked/mockedData/RepositoryComponent/mockedApis";
import RepositoryItem from "../RepositoryItem/RepositoryItem";
import RepositoryItemSkeleton from "../RepositoryItem/RepositoryItemSkeleton/RepositoryItemSkeleton";
import StickyScrollButton from "../../ui/StickyButton/StickyButton";

interface Props {
  data: IFreeApi[] | null;
  isLoading: any;
  errorMessage: any;
}

const RepositoryList = ({ data, isLoading, errorMessage }: Props) => {
  return (
    <>
      <div>
        <h1
          className="text-3xl font-bold mb-2 mt-10 xl:mt-0"
          data-testid="public-api-list"
        >
          Public APIs
        </h1>
        {isLoading && <h1>Loading</h1>}
        <section className="grid grid-cols-3 md:grid-cols-6 gap-2 p-4 xl:p-8 bg-white shadow-md rounded-lg mt-5 ">
          <h2 className="font-bold">Name</h2>
          <h2 className="font-bold">Description</h2>
          <h2 className="font-bold hidden md:block">Auth</h2>
          <h2 className="font-bold hidden md:block">Https</h2>
          <h2 className="font-bold hidden md:block">Cors</h2>
          <h2 className="font-bold">Link</h2>
        </section>
        {!errorMessage && (
          <List
            data={data && data.length > 0 ? data : mockedApis}
            keyPropertyName={["Link", "API"]}
            itemComponent={!isLoading ? RepositoryItem : RepositoryItemSkeleton}
          />
        )}
      </div>
      <StickyScrollButton />
    </>
  );
};

export default RepositoryList;
