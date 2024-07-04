import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";

export type InformationPostaleCreateInput = {
  adresse: AdresseWhereUniqueInput | null;
  ancienCogCommune?: string | null;
  cogCommune?: string | null;
  cogPays?: string | null;
  complementAdresseExterieur?: string | null;
  complementAdresseInterieur?: string | null;
  complementVoie?: string | null;
  cpCommune: string;
  libelleCommune?: string | null;
  libellePays?: string | null;
  libelleVoie: string;
  matriculeVoie?: string | null;
  mentionPostal?: string | null;
  numeroVoie?: number | null;
  typeAbregeVoie?: string | null;
};
