import { IFreeApi } from "../../../interfaces/IFreeApi";
import Card from "../../ui/Card/Card";

const RepositoryItem: React.FunctionComponent<IFreeApi> = ({
  API: name,
  Description: description,
  Auth: auth,
  HTTPS: https,
  Cors: cors,
}: IFreeApi) => {
  return (
    <Card classNames="my-4 shadow-sm">
      <article className="grid grid-cols-5 gap-2  p-4 ">
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{auth}</p>
        <p data-testid="https">{https ? "Yes" : "No"}</p>
        <p data-testid="cors">
          {cors ? cors[0].toUpperCase() + cors.slice(1) : "No"}
        </p>
      </article>
    </Card>
  );
};

export default RepositoryItem;
