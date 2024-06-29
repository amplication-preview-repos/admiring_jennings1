import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AffectationListRelationFilter } from "../affectation/AffectationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";

export type StructureWhereInput = {
  affectationDomaine?: AffectationWhereUniqueInput;
  affectations?: AffectationListRelationFilter;
  id?: StringFilter;
  libell?: StringFilter;
  perimetre?: PerimetreWhereUniqueInput;
  typeField?: "Agence" | "Association" | "Federation";
};
