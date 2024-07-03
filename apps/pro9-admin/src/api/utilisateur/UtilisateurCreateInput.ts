import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UtilisateurCreateInput = {
  civilite?: string | null;
  dateActivation?: Date | null;
  dateDesactivation?: Date | null;
  email?: string | null;
  mssEmail?: string | null;
  nom?: string | null;
  password?: string | null;
  perimetre: PerimetreWhereUniqueInput;
  prenom?: string | null;
  roles: InputJsonValue;
  username?: string | null;
};
