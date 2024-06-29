import { Salarie } from "../salarie/Salarie";
import { JsonValue } from "type-fest";

export type Telecom = {
  createdAt: Date;
  id: string;
  Salarie?: Salarie | null;
  typeMoyen?: "Option1";
  updatedAt: Date;
  valeurMoyen: JsonValue;
};
