import { HabilitationWhereInput } from "./HabilitationWhereInput";
import { HabilitationOrderByInput } from "./HabilitationOrderByInput";

export type HabilitationFindManyArgs = {
  where?: HabilitationWhereInput;
  orderBy?: Array<HabilitationOrderByInput>;
  skip?: number;
  take?: number;
};
