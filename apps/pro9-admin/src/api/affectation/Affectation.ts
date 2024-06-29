import { Structure } from "../structure/Structure";
import { Salarie } from "../salarie/Salarie";

export type Affectation = {
  activite?: "Domicile" | "Soin" | "Repas";
  createdAt: Date;
  domaine?: Structure;
  id: string;
  salarie?: Salarie | null;
  structure?: Structure;
  updatedAt: Date;
};
