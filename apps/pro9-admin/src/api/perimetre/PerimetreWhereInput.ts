import { HabilitationListRelationFilter } from "../habilitation/HabilitationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";

export type PerimetreWhereInput = {
  habilitations?: HabilitationListRelationFilter;
  id?: StringFilter;
  structure?: StructureWhereUniqueInput;
};
