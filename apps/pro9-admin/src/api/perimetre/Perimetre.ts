import { Structure } from "../structure/Structure";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Perimetre = {
  createdAt: Date;
  id: string;
  structure?: Structure;
  updatedAt: Date;
  utilisateurs?: Array<Utilisateur>;
};
