import { Adresse } from "../adresse/Adresse";

export type InformationPostale = {
  adresse?: Adresse | null;
  ancienCogCommune: string | null;
  cogCommune: string | null;
  cogPays: string | null;
  complementAdresseExterieur: string | null;
  complementAdresseInterieur: string | null;
  complementVoie: string | null;
  cpCommune: string;
  createdAt: Date;
  id: string;
  libelleCommune: string | null;
  libellePays: string | null;
  libelleVoie: string;
  matriculeVoie: string | null;
  mentionPostal: string | null;
  numeroVoie: number | null;
  typeAbregeVoie: string | null;
  updatedAt: Date;
};
