import { IFreeApi } from "../../../interfaces/IFreeApi";
import Card from "../../ui/Card/Card";

const RepositoryItem: React.FunctionComponent<IFreeApi> = ({
  API: name,
  Description: description,
  Auth: auth,
  HTTPS: https,
  Cors: cors,
  Link: link,
}: IFreeApi) => {
  return (
    <Card classNames="my-4 shadow-sm">
      <article className="grid grid-cols-3 md:grid-cols-6 gap-2  p-4 break-words">
        <h2 className="font-bold ">{name}</h2>
        <p>{description}</p>
        <p className="hidden md:block">{auth}</p>
        <p data-testid="https" className="hidden md:block">
          {https ? "Yes" : "No"}
        </p>
        <p data-testid="cors" className="hidden md:block">
          {cors ? cors[0].toUpperCase() + cors.slice(1) : "No"}
        </p>
        <a
          href={link}
          className="text-indigo-500 font-bold underline-offset-4 underline decoration-4 "
        >
          Link
        </a>
      </article>
    </Card>
  );
};

export default RepositoryItem;
