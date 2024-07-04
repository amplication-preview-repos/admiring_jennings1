import { TelecomWhereInput } from "./TelecomWhereInput";
import { TelecomOrderByInput } from "./TelecomOrderByInput";

export type TelecomFindManyArgs = {
  where?: TelecomWhereInput;
  orderBy?: Array<TelecomOrderByInput>;
  skip?: number;
  take?: number;
};
