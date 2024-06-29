import { PerimetreWhereInput } from "./PerimetreWhereInput";
import { PerimetreOrderByInput } from "./PerimetreOrderByInput";

export type PerimetreFindManyArgs = {
  where?: PerimetreWhereInput;
  orderBy?: Array<PerimetreOrderByInput>;
  skip?: number;
  take?: number;
};
