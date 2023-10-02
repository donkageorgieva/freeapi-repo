import { Link } from "react-router-dom";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  to: string;
}
const LinkButton = ({ to, children }: Props) => {
  return (
    <Link
      to={to}
      className="bg-indigo-500 rounded px-5 py-2 text-white my-2 inline-block "
    >
      {children}
    </Link>
  );
};

export default LinkButton;
