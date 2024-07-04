import { AffectationListRelationFilter } from "../affectation/AffectationListRelationFilter";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { TelecomWhereUniqueInput } from "../telecom/TelecomWhereUniqueInput";

export type SalarieWhereInput = {
  affectations?: AffectationListRelationFilter;
  demenegament?: AdresseWhereUniqueInput;
  domiciliation?: AdresseWhereUniqueInput;
  id?: StringFilter;
  identite?: IdentiteWhereUniqueInput;
  statutAdmr?: BooleanFilter;
  statutVip?: BooleanFilter;
  telecom?: TelecomWhereUniqueInput;
};
