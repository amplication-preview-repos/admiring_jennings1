import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AffectationListRelationFilter } from "../affectation/AffectationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type StructureWhereInput = {
  affectationDomaine?: AffectationWhereUniqueInput;
  affectations?: AffectationListRelationFilter;
  code?: StringFilter;
  id?: StringFilter;
  typeField?: "Agence" | "Association" | "Federation";
  utilisateur?: UtilisateurWhereUniqueInput;
};
