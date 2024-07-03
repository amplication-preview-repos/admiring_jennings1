import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";

export type UtilisateurWhereInput = {
  civilite?: StringNullableFilter;
  dateActivation?: DateTimeNullableFilter;
  dateDesactivation?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  mssEmail?: StringNullableFilter;
  nom?: StringNullableFilter;
  perimetre?: PerimetreWhereUniqueInput;
  prenom?: StringNullableFilter;
  username?: StringNullableFilter;
};
