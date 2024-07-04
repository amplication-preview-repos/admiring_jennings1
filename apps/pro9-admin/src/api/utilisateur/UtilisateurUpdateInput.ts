import { InputJsonValue } from "../../types";
import { StructureUpdateManyWithoutUtilisateursInput } from "./StructureUpdateManyWithoutUtilisateursInput";

export type UtilisateurUpdateInput = {
  civilite?: string | null;
  dateActivation?: Date | null;
  dateDesactivation?: Date | null;
  email?: string | null;
  nom?: string | null;
  password?: string | null;
  prenom?: string | null;
  roles?: InputJsonValue;
  structures?: StructureUpdateManyWithoutUtilisateursInput;
  username?: string | null;
};
