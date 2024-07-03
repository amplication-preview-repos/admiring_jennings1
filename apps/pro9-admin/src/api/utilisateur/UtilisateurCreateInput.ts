import { InputJsonValue } from "../../types";
import { StructureCreateNestedManyWithoutUtilisateursInput } from "./StructureCreateNestedManyWithoutUtilisateursInput";

export type UtilisateurCreateInput = {
  civilite?: string | null;
  dateActivation?: Date | null;
  dateDesactivation?: Date | null;
  email?: string | null;
  nom?: string | null;
  password?: string | null;
  prenom?: string | null;
  roles: InputJsonValue;
  structures?: StructureCreateNestedManyWithoutUtilisateursInput;
  username?: string | null;
};
