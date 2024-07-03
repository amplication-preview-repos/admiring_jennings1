import { Salarie } from "../salarie/Salarie";

export type Identite = {
  civilite?: "Homme" | "Femme" | null;
  codeLieuNaissance: string;
  communeDeNaissance: string;
  createdAt: Date;
  dateNaissance: Date;
  departementDeNaissance: string | null;
  id: string;
  nationalite?: "France" | "Autre";
  nomNaissance: string;
  nomUsuel: string;
  numeroInsee: string | null;
  paysDeNaissance: string;
  premierPrenom: string;
  prenoms: string;
  prenomUsuel: string;
  salarie?: Salarie | null;
  sexe?: "Feminin" | "Masculin" | null;
  updatedAt: Date;
};
