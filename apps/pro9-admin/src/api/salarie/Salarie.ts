import { Affectation } from "../affectation/Affectation";
import { Adresse } from "../adresse/Adresse";
import { Identite } from "../identite/Identite";
import { Telecom } from "../telecom/Telecom";

export type Salarie = {
  affectations?: Affectation;
  createdAt: Date;
  demenegament?: Adresse;
  domiciliation?: Adresse;
  id: string;
  identite?: Identite;
  statutAdmr: boolean;
  statutVip: boolean;
  telecom?: Telecom | null;
  updatedAt: Date;
};
