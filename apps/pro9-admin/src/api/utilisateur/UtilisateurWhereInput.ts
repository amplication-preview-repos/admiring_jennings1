import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StructureListRelationFilter } from "../structure/StructureListRelationFilter";

export type UtilisateurWhereInput = {
  civilite?: StringNullableFilter;
  dateActivation?: DateTimeNullableFilter;
  dateDesactivation?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  nom?: StringNullableFilter;
  prenom?: StringNullableFilter;
  structures?: StructureListRelationFilter;
  username?: StringNullableFilter;
};
