import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <article className="p-4 bg-white rounded-lg shadow-lg">{children}</article>
  );
};

export default Card;
