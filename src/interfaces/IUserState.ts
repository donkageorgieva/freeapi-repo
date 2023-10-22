import { IUserLogin } from "./IUserLogin";

export interface IUserState extends IUserLogin {
  token: string;
}
