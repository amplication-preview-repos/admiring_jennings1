import { StringFilter } from "../../util/StringFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";
import { Salarie } from "../salarie/Salarie";
import { JsonFilter } from "../../util/JsonFilter";

export type TelecomWhereInput = {
  id?: StringFilter;
  Salarie?: SalarieWhereUniqueInput;
  typeMoyen?: "Option1";
  valeurMoyen?: JsonFilter;
};
