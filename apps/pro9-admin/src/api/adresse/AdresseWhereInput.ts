import { DateTimeFilter } from "../../util/DateTimeFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { InformationPostaleWhereUniqueInput } from "../informationPostale/InformationPostaleWhereUniqueInput";

export type AdresseWhereInput = {
  debutValidite?: DateTimeFilter;
  demanagementSalaries?: SalarieWhereUniqueInput;
  DomiciliationSalarie?: SalarieWhereUniqueInput;
  finValidite?: DateTimeNullableFilter;
  id?: StringFilter;
  informationPostale?: InformationPostaleWhereUniqueInput;
};
