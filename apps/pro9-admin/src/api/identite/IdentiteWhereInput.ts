import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type IdentiteWhereInput = {
  civilite?: "Homme" | "Femme";
  codeLieuNaissance?: StringFilter;
  communeDeNaissance?: StringFilter;
  dateNaissance?: DateTimeFilter;
  departementDeNaissance?: StringNullableFilter;
  id?: StringFilter;
  nationalite?: "Option1";
  nomNaissance?: StringFilter;
  nomUsuel?: StringFilter;
  numeroInsee?: StringNullableFilter;
  paysDeNaissance?: JsonFilter;
  premierPrenom?: StringFilter;
  prenoms?: StringFilter;
  prenomUsuel?: StringFilter;
  salarie?: SalarieWhereUniqueInput;
  sexe?: "Feminin" | "Masculin";
};
