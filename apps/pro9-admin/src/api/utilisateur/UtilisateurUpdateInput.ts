import { HabilitationWhereUniqueInput } from "../habilitation/HabilitationWhereUniqueInput";

export type UtilisateurUpdateInput = {
  civilite?: string | null;
  dateActivation?: Date | null;
  dateDesactivation?: Date | null;
  email?: string | null;
  habilitation?: HabilitationWhereUniqueInput | null;
  mssEmail?: string | null;
  nom?: string | null;
  password?: string | null;
  prenom?: string | null;
  role?: "Option1" | null;
  username?: string | null;
};
