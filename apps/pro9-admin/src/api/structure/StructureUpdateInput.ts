import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AffectationUpdateManyWithoutStructuresInput } from "./AffectationUpdateManyWithoutStructuresInput";
import { UtilisateurWhereUniqueInput } from "../utilisateur/UtilisateurWhereUniqueInput";

export type StructureUpdateInput = {
  affectationDomaine?: AffectationWhereUniqueInput | null;
  affectations?: AffectationUpdateManyWithoutStructuresInput;
  code?: string;
  typeField?: "Agence" | "Association" | "Federation" | null;
  utilisateur?: UtilisateurWhereUniqueInput | null;
};
