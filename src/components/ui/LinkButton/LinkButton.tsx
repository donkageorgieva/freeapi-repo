import { Link } from "react-router-dom";
import { ReactNode } from "react";
import StyledButton from "../StyledButton/StyledButton";
interface Props {
  children: ReactNode;
  to: string;
  secondary?: boolean;
}
const LinkButton = ({ to, children, secondary }: Props) => {
  return (
    <StyledButton secondary={secondary}>
      <Link to={to}>{children}</Link>
    </StyledButton>
  );
};

export default LinkButton;
