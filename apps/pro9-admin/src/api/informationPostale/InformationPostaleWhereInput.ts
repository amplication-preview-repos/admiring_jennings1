import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type InformationPostaleWhereInput = {
  adresse?: AdresseWhereUniqueInput;
  ancienCogCommune?: StringNullableFilter;
  cogCommune?: StringNullableFilter;
  cogPays?: StringNullableFilter;
  complementAdresseExterieur?: StringNullableFilter;
  complementAdresseInterieur?: StringNullableFilter;
  complementVoie?: StringNullableFilter;
  cpCommune?: StringFilter;
  id?: StringFilter;
  libelleCommune?: StringNullableFilter;
  libellePays?: StringNullableFilter;
  libelleVoie?: StringFilter;
  matriculeVoie?: StringNullableFilter;
  mentionPostal?: StringNullableFilter;
  numeroVoie?: IntNullableFilter;
  typeAbregeVoie?: StringNullableFilter;
};
