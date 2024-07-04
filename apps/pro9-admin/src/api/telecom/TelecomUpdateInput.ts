import { SalarieUpdateManyWithoutTelecomsInput } from "./SalarieUpdateManyWithoutTelecomsInput";
import { Salarie } from "../salarie/Salarie";
import { InputJsonValue } from "../../types";

export type TelecomUpdateInput = {
  Salarie?: SalarieUpdateManyWithoutTelecomsInput;
  typeMoyen?: string;
  valeurMoyen?: InputJsonValue;
};
