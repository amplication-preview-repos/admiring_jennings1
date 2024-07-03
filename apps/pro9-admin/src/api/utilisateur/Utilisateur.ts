import { JsonValue } from "type-fest";
import { Structure } from "../structure/Structure";

export type Utilisateur = {
  civilite: string | null;
  createdAt: Date;
  dateActivation: Date | null;
  dateDesactivation: Date | null;
  email: string | null;
  id: string;
  nom: string | null;
  prenom: string | null;
  roles: JsonValue;
  structures?: Array<Structure>;
  updatedAt: Date;
  username: string | null;
};
