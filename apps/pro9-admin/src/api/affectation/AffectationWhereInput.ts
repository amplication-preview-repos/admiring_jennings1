import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type AffectationWhereInput = {
  activite?: "Domicile" | "Soin" | "Repas";
  domaine?: StructureWhereUniqueInput;
  id?: StringFilter;
  salarie?: SalarieWhereUniqueInput;
  structure?: StructureWhereUniqueInput;
};
