import { SortOrder } from "../../util/SortOrder";

export type InformationPostaleOrderByInput = {
  adresseId?: SortOrder;
  ancienCogCommune?: SortOrder;
  cogCommune?: SortOrder;
  cogPays?: SortOrder;
  complementAdresseExterieur?: SortOrder;
  complementAdresseInterieur?: SortOrder;
  complementVoie?: SortOrder;
  cpCommune?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  libelleCommune?: SortOrder;
  libellePays?: SortOrder;
  libelleVoie?: SortOrder;
  matriculeVoie?: SortOrder;
  mentionPostal?: SortOrder;
  numeroVoie?: SortOrder;
  typeAbregeVoie?: SortOrder;
  updatedAt?: SortOrder;
};
