import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type HabilitationWhereInput = {
  gestionAdministration?: BooleanNullableFilter;
  gestionUtilisateur?: BooleanNullableFilter;
  id?: StringFilter;
  perimetre?: PerimetreWhereUniqueInput;
  utilisateur?: UtilisateurWhereUniqueInput;
};
