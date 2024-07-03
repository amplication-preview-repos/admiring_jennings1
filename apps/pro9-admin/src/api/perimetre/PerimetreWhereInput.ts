import { StringFilter } from "../../util/StringFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { UtilisateurListRelationFilter } from "../utilisateur/UtilisateurListRelationFilter";

export type PerimetreWhereInput = {
  id?: StringFilter;
  structure?: StructureWhereUniqueInput;
  utilisateurs?: UtilisateurListRelationFilter;
};
