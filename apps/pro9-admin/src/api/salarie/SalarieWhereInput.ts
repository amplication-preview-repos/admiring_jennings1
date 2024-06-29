import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TelecomWhereUniqueInput } from "../telecom/TelecomWhereUniqueInput";

export type SalarieWhereInput = {
  affectations?: AffectationWhereUniqueInput;
  demenegament?: AdresseWhereUniqueInput;
  domiciliation?: AdresseWhereUniqueInput;
  id?: StringFilter;
  identite?: IdentiteWhereUniqueInput;
  statutAdmr?: BooleanFilter;
  statutVip?: BooleanFilter;
  telecom?: TelecomWhereUniqueInput;
};
