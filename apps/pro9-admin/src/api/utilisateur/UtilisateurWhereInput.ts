import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HabilitationWhereUniqueInput } from "../habilitation/HabilitationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UtilisateurWhereInput = {
  civilite?: StringNullableFilter;
  dateActivation?: DateTimeNullableFilter;
  dateDesactivation?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  habilitation?: HabilitationWhereUniqueInput;
  id?: StringFilter;
  mssEmail?: StringNullableFilter;
  nom?: StringNullableFilter;
  prenom?: StringNullableFilter;
  role?: "Option1";
  username?: StringNullableFilter;
};
