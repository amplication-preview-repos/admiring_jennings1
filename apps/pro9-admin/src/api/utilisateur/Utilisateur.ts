import { Perimetre } from "../perimetre/Perimetre";
import { JsonValue } from "type-fest";

export type Utilisateur = {
  civilite: string | null;
  createdAt: Date;
  dateActivation: Date | null;
  dateDesactivation: Date | null;
  email: string | null;
  id: string;
  mssEmail: string | null;
  nom: string | null;
  perimetre?: Perimetre;
  prenom: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string | null;
};
