import { ILoginInputs } from "./ILoginInputs";

export interface ISignUpInputs extends ILoginInputs {
  confirmPassword: string;
  username: string;
}
