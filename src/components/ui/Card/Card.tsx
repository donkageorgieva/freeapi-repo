import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  classNames?: string;
}

const Card = ({ children, classNames }: Props) => {
  return (
    <article
      className={["p-4 bg-white rounded-lg shadow-lg", classNames].join(" ")}
    >
      {children}
    </article>
  );
};

export default Card;
