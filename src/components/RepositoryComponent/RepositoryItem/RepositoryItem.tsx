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
      <article className="grid grid-cols-6 gap-2  p-4 break-words">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{auth}</p>
        <p data-testid="https">{https ? "Yes" : "No"}</p>
        <p data-testid="cors">
          {cors ? cors[0].toUpperCase() + cors.slice(1) : "No"}
        </p>
        <a href={link} className="text-indigo-500 font-bold">
          {link}
        </a>
      </article>
    </Card>
  );
};

export default RepositoryItem;
