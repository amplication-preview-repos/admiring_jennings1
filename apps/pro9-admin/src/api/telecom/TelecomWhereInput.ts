import { StringFilter } from "../../util/StringFilter";
import { SalarieListRelationFilter } from "../salarie/SalarieListRelationFilter";
import { Salarie } from "../salarie/Salarie";
import { JsonFilter } from "../../util/JsonFilter";

export type TelecomWhereInput = {
  id?: StringFilter;
  Salarie?: SalarieListRelationFilter;
  typeMoyen?: StringFilter;
  valeurMoyen?: JsonFilter;
};
