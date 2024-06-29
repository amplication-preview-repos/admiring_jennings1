import { SalarieWhereInput } from "./SalarieWhereInput";
import { SalarieOrderByInput } from "./SalarieOrderByInput";

export type SalarieFindManyArgs = {
  where?: SalarieWhereInput;
  orderBy?: Array<SalarieOrderByInput>;
  skip?: number;
  take?: number;
};
