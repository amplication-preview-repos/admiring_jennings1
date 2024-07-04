import { Salarie } from "../salarie/Salarie";
import { InformationPostale } from "../informationPostale/InformationPostale";

export type Adresse = {
  createdAt: Date;
  debutValidite: Date;
  demanagementSalaries?: Salarie | null;
  DomiciliationSalarie?: Salarie | null;
  finValidite: Date | null;
  id: string;
  informationPostale?: InformationPostale;
  localisationInitiale: string | null;
  localisationPrecise: string | null;
  updatedAt: Date;
};
