import { IFreeApi } from "./IFreeApi";

export interface IRepositoryState {
  filter: string | null;
  apis: IFreeApi[];
  isLoading: boolean;
  errorMessage: string | null;
  categories: string[];
}
