import { Affectation } from "../affectation/Affectation";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Structure = {
  affectationDomaine?: Affectation | null;
  affectations?: Array<Affectation>;
  code: string;
  createdAt: Date;
  id: string;
  typeField?: "Agence" | "Association" | "Federation" | null;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
