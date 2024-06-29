import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type AffectationUpdateInput = {
  activite?: "Domicile" | "Soin" | "Repas";
  domaine?: StructureWhereUniqueInput;
  salarie?: SalarieWhereUniqueInput | null;
  structure?: StructureWhereUniqueInput;
};
