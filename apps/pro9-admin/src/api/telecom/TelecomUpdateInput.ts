import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";
import { Salarie } from "../salarie/Salarie";
import { InputJsonValue } from "../../types";

export type TelecomUpdateInput = {
  Salarie?: SalarieWhereUniqueInput | null;
  typeMoyen?: string;
  valeurMoyen?: InputJsonValue;
};
