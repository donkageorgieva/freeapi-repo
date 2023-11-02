import { IFreeApi } from "./IFreeApi";

export interface IRepositoryState {
  filter: string | null;
  apis: IFreeApi[];
  isLoading: {
    categories: boolean;
    apis: boolean;
  };
  errorMessage: string | null;
  categories: string[];
}
