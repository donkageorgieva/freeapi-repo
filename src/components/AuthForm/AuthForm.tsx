import { SubmitHandler, useForm } from "react-hook-form";
import { ILoginInputs } from "../../interfaces/ILoginInputs";
import { ISignUpInputs } from "../../interfaces/ISignUpInputs";
import Card from "../ui/Card/Card";
import { capitalizeString } from "../../utils/formatters/capitalizeString";
import BackButton from "../ui/BackButton/BackButton";
import styles from "./AuthForm.module.scss";
import ArrowBack from "../../assets/svgs/ArrowBack";
import StyledButton from "../ui/StyledButton/StyledButton";
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
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <Card
      classNames={[
        "flex flex-col justify-center items-center  xl:w-1/5 sm:w-4/5 md:w-auto   md:h-auto",
        styles["form-container"],
      ].join(" ")}
    >
      <div>
        <div className="flex justify-between items-center w-full py-4">
          <BackButton>
            <ArrowBack />
          </BackButton>
          <h1 className="font-bold text-lg">{capitalizeString(formType)}</h1>
        </div>
        <form className="flex flex-col py-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              autoComplete="on"
              type="email"
              placeholder="Email"
              className="block"
              id="email"
              defaultValue=""
              {...register("email")}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              type="password"
              autoComplete="off"
              className="block"
              id="password"
              defaultValue=""
              {...register("password")}
            />
          </div>

          {formType === "register" && (
            <>
              <div>
                <label htmlFor="repeat-password">Confirm Password</label>
                <input
                  placeholder="Confirm Password"
                  type="password"
                  autoComplete="off"
                  className="block"
                  id="repeat-password"
                  defaultValue=""
                  {...register("confirmPassword")}
                />
              </div>

              <div className="order-first">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="block "
                  autoComplete="on"
                  id="username"
                  placeholder="Username"
                  defaultValue=""
                  {...register("username")}
                />
              </div>
            </>
          )}
          <div className="flex justify-between pt-4">
            <StyledButton>
              <button type="submit">{capitalizeString(formType)}</button>
            </StyledButton>

            <BackButton>Cancel</BackButton>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default AuthForm;
