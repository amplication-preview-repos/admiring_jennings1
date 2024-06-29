import { HabilitationUpdateManyWithoutPerimetresInput } from "./HabilitationUpdateManyWithoutPerimetresInput";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type PerimetreUpdateInput = {
  habilitations?: HabilitationUpdateManyWithoutPerimetresInput;
  structure?: StructureWhereUniqueInput;
};
