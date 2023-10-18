import { Link } from "react-router-dom";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  to: string;
  secondary?: boolean;
}
const LinkButton = ({ to, children, secondary }: Props) => {
  return (
    <Link
      to={to}
      className={`${
        !secondary ? "bg-indigo-500" : "outline outline-indigo-500"
      } rounded-lg px-5 py-2 ${
        !secondary ? "text-white" : "text-indigo-500"
      } my-2 inline-block hover:bg-indigo-900 ${
        secondary && "hover:text-white hover:outline-none"
      } transition-all `}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
