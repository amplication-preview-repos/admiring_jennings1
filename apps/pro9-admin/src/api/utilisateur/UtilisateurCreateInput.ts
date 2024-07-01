import { HabilitationWhereUniqueInput } from "../habilitation/HabilitationWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UtilisateurCreateInput = {
  civilite?: string | null;
  dateActivation?: Date | null;
  dateDesactivation?: Date | null;
  email?: string | null;
  habilitation?: HabilitationWhereUniqueInput | null;
  mssEmail?: string | null;
  nom?: string | null;
  password?: string | null;
  prenom?: string | null;
  roles: InputJsonValue;
  username?: string | null;
};
