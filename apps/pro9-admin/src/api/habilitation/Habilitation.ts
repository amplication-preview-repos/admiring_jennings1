import { Perimetre } from "../perimetre/Perimetre";
import { Utilisateur } from "../utilisateur/Utilisateur";

export type Habilitation = {
  createdAt: Date;
  gestionAdministration: boolean | null;
  gestionUtilisateur: boolean | null;
  id: string;
  perimetre?: Perimetre;
  updatedAt: Date;
  utilisateur?: Utilisateur | null;
};
