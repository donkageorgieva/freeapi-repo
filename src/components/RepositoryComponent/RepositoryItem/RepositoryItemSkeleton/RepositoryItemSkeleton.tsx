import Card from "../../../ui/Card/Card";

const RepositoryItemSkeleton = () => {
  return (
    <Card classNames="my-4 shadow-sm">
      <article className="grid grid-cols-5 gap-2  p-4  ">
        <div className="h-2 w-3/12 bg-stone-200 rounded-sm animate-pulse"></div>
        <div>
          <div className="h-2 bg-stone-200 rounded-sm animate-pulse mb-2"></div>
          <div className="h-2 w-6/12 bg-stone-200 rounded-sm animate-pulse"></div>
        </div>

        <div className="h-2 w-2/12 bg-stone-200 rounded-sm animate-pulse"></div>
        <div className="h-2 w-2/12 bg-stone-200 rounded-sm animate-pulse"></div>
        <div className="h-2 w-2/12 bg-stone-200 rounded-sm animate-pulse"></div>
      </article>
    </Card>
  );
};

export default RepositoryItemSkeleton;
