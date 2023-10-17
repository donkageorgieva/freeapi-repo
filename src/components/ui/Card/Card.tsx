import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classNames?: string;
  dataTestId?: string;
}

const Card = ({ children, classNames, dataTestId }: Props) => {
  return (
    <article
      data-testid={dataTestId}
      className={["p-4 bg-white rounded-lg shadow-lg", classNames].join(" ")}
    >
      {children}
    </article>
  );
};

export default Card;
