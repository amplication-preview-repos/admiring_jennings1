import { AffectationCreateNestedManyWithoutSalariesInput } from "./AffectationCreateNestedManyWithoutSalariesInput";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { TelecomWhereUniqueInput } from "../telecom/TelecomWhereUniqueInput";

export type SalarieCreateInput = {
  affectations?: AffectationCreateNestedManyWithoutSalariesInput;
  demenegament: AdresseWhereUniqueInput;
  domiciliation: AdresseWhereUniqueInput;
  identite: IdentiteWhereUniqueInput;
  statutAdmr: boolean;
  statutVip: boolean;
  telecom?: TelecomWhereUniqueInput | null;
};
