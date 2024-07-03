import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";
import { InformationPostaleWhereUniqueInput } from "../informationPostale/InformationPostaleWhereUniqueInput";

export type AdresseUpdateInput = {
  debutValidite?: Date;
  demanagementSalaries?: SalarieWhereUniqueInput | null;
  DomiciliationSalarie?: SalarieWhereUniqueInput | null;
  finValidite?: Date | null;
  informationPostale?: InformationPostaleWhereUniqueInput;
  localisationInitiale?: string | null;
  localisationPrecise?: string | null;
};
