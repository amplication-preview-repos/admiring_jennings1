import { Habilitation } from "../habilitation/Habilitation";
import { Structure } from "../structure/Structure";

export type Perimetre = {
  createdAt: Date;
  habilitations?: Array<Habilitation>;
  id: string;
  structure?: Structure;
  updatedAt: Date;
};
