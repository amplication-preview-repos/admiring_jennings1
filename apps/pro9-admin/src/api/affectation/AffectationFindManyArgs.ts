import { AffectationWhereInput } from "./AffectationWhereInput";
import { AffectationOrderByInput } from "./AffectationOrderByInput";

export type AffectationFindManyArgs = {
  where?: AffectationWhereInput;
  orderBy?: Array<AffectationOrderByInput>;
  skip?: number;
  take?: number;
};
