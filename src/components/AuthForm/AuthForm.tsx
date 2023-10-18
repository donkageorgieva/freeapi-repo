import { useForm } from "react-hook-form";
import { ILoginInputs } from "../../interfaces/ILoginInputs";
import { ISignUpInputs } from "../../interfaces/ISignUpInputs";
import Card from "../ui/Card/Card";
import { capitalizeString } from "../../utils/formatters/capitalizeString";
import BackButton from "../ui/BackButton/BackButton";
interface Props {
  formType: string;
}
type Inputs = Props["formType"] extends "login" ? ILoginInputs : ISignUpInputs;
const AuthForm = ({ formType }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  return (
    <Card classNames="w-2/6 flex justify-center items-center">
      <h1>{capitalizeString(formType)}</h1>
      <BackButton />
      <form className=" ">
        <input type="email" className="block" />
        <input type="password" className="block" />
      </form>
    </Card>
  );
};

export default AuthForm;
