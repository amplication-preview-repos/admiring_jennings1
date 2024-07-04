import { SalarieCreateNestedManyWithoutTelecomsInput } from "./SalarieCreateNestedManyWithoutTelecomsInput";
import { Salarie } from "../salarie/Salarie";
import { InputJsonValue } from "../../types";

export type TelecomCreateInput = {
  Salarie?: SalarieCreateNestedManyWithoutTelecomsInput;
  typeMoyen: string;
  valeurMoyen: InputJsonValue;
};
