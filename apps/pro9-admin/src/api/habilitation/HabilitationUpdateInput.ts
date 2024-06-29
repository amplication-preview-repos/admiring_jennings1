import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type HabilitationUpdateInput = {
  gestionAdministration?: boolean | null;
  gestionUtilisateur?: boolean | null;
  perimetre?: PerimetreWhereUniqueInput;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
