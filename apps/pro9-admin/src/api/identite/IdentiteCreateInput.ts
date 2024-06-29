import { InputJsonValue } from "../../types";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type IdentiteCreateInput = {
  civilite?: "Homme" | "Femme" | null;
  codeLieuNaissance: string;
  communeDeNaissance: string;
  dateNaissance: Date;
  departementDeNaissance?: string | null;
  nationalite: "Option1";
  nomNaissance: string;
  nomUsuel: string;
  numeroInsee?: string | null;
  paysDeNaissance?: InputJsonValue;
  premierPrenom: string;
  prenoms: string;
  prenomUsuel: string;
  salarie: SalarieWhereUniqueInput | null;
  sexe?: "Feminin" | "Masculin" | null;
};
