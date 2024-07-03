import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type IdentiteUpdateInput = {
  civilite?: "Homme" | "Femme" | null;
  codeLieuNaissance?: string;
  communeDeNaissance?: string;
  dateNaissance?: Date;
  departementDeNaissance?: string | null;
  nationalite?: "France" | "Autre";
  nomNaissance?: string;
  nomUsuel?: string;
  numeroInsee?: string | null;
  paysDeNaissance?: string;
  premierPrenom?: string;
  prenoms?: string;
  prenomUsuel?: string;
  salarie?: SalarieWhereUniqueInput | null;
  sexe?: "Feminin" | "Masculin" | null;
};
