import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { TelecomWhereUniqueInput } from "../telecom/TelecomWhereUniqueInput";

export type SalarieCreateInput = {
  affectations: AffectationWhereUniqueInput;
  demenegament: AdresseWhereUniqueInput;
  domiciliation: AdresseWhereUniqueInput;
  identite: IdentiteWhereUniqueInput;
  statutAdmr: boolean;
  statutVip: boolean;
  telecom?: TelecomWhereUniqueInput | null;
};
