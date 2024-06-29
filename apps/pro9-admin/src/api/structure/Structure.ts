import { Affectation } from "../affectation/Affectation";
import { Perimetre } from "../perimetre/Perimetre";

export type Structure = {
  affectationDomaine?: Affectation | null;
  affectations?: Array<Affectation>;
  createdAt: Date;
  id: string;
  libell: string;
  perimetre?: Perimetre | null;
  typeField?: "Agence" | "Association" | "Federation" | null;
  updatedAt: Date;
};
