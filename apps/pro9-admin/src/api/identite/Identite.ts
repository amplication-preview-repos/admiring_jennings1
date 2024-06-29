import { JsonValue } from "type-fest";
import { Salarie } from "../salarie/Salarie";

export type Identite = {
  civilite?: "Homme" | "Femme" | null;
  codeLieuNaissance: string;
  communeDeNaissance: string;
  createdAt: Date;
  dateNaissance: Date;
  departementDeNaissance: string | null;
  id: string;
  nationalite?: "Option1";
  nomNaissance: string;
  nomUsuel: string;
  numeroInsee: string | null;
  paysDeNaissance: JsonValue;
  premierPrenom: string;
  prenoms: string;
  prenomUsuel: string;
  salarie?: Salarie | null;
  sexe?: "Feminin" | "Masculin" | null;
  updatedAt: Date;
};
