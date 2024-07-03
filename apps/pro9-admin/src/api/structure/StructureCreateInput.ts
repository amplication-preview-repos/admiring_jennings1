import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AffectationCreateNestedManyWithoutStructuresInput } from "./AffectationCreateNestedManyWithoutStructuresInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type StructureCreateInput = {
  affectationDomaine?: AffectationWhereUniqueInput | null;
  affectations?: AffectationCreateNestedManyWithoutStructuresInput;
  code: string;
  typeField?: "Agence" | "Association" | "Federation" | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
