import { Habilitation } from "../habilitation/Habilitation";
import { JsonValue } from "type-fest";

export type Utilisateur = {
  civilite: string | null;
  createdAt: Date;
  dateActivation: Date | null;
  dateDesactivation: Date | null;
  email: string | null;
  habilitation?: Habilitation | null;
  id: string;
  mssEmail: string | null;
  nom: string | null;
  prenom: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string | null;
};
