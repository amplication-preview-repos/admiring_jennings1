import { HabilitationCreateNestedManyWithoutPerimetresInput } from "./HabilitationCreateNestedManyWithoutPerimetresInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type PerimetreCreateInput = {
  habilitations?: HabilitationCreateNestedManyWithoutPerimetresInput;
  structure: StructureWhereUniqueInput;
};
