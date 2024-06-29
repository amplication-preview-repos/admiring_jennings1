import { Habilitation } from "../habilitation/Habilitation";

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
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
