import { IdentiteWhereInput } from "./IdentiteWhereInput";
import { IdentiteOrderByInput } from "./IdentiteOrderByInput";

export type IdentiteFindManyArgs = {
  where?: IdentiteWhereInput;
  orderBy?: Array<IdentiteOrderByInput>;
  skip?: number;
  take?: number;
};
