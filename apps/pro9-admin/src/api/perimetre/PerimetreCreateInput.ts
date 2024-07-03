import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { UtilisateurCreateNestedManyWithoutPerimetresInput } from "./UtilisateurCreateNestedManyWithoutPerimetresInput";

export type PerimetreCreateInput = {
  structure: StructureWhereUniqueInput;
  utilisateurs?: UtilisateurCreateNestedManyWithoutPerimetresInput;
};
