import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { UtilisateurUpdateManyWithoutPerimetresInput } from "./UtilisateurUpdateManyWithoutPerimetresInput";

export type PerimetreUpdateInput = {
  structure?: StructureWhereUniqueInput;
  utilisateurs?: UtilisateurUpdateManyWithoutPerimetresInput;
};
