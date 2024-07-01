import { Salarie } from "../salarie/Salarie";
import { JsonValue } from "type-fest";

export type Telecom = {
  createdAt: Date;
  id: string;
  Salarie?: Salarie | null;
  typeMoyen: string;
  updatedAt: Date;
  valeurMoyen: JsonValue;
};
