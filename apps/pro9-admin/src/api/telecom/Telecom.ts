import { Salarie } from "../salarie/Salarie";
import { JsonValue } from "type-fest";

export type Telecom = {
  createdAt: Date;
  id: string;
  Salarie?: Array<Salarie>;
  typeMoyen: string;
  updatedAt: Date;
  valeurMoyen: JsonValue;
};
