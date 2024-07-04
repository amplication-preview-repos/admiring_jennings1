import { InformationPostaleWhereInput } from "./InformationPostaleWhereInput";
import { InformationPostaleOrderByInput } from "./InformationPostaleOrderByInput";

export type InformationPostaleFindManyArgs = {
  where?: InformationPostaleWhereInput;
  orderBy?: Array<InformationPostaleOrderByInput>;
  skip?: number;
  take?: number;
};
