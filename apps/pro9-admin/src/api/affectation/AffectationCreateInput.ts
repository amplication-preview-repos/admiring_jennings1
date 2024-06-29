import { StructureWhereUniqueInput } from "../structure/StructureWhereUniqueInput";
import { SalarieWhereUniqueInput } from "../salarie/SalarieWhereUniqueInput";

export type AffectationCreateInput = {
  activite: "Domicile" | "Soin" | "Repas";
  domaine: StructureWhereUniqueInput;
  salarie?: SalarieWhereUniqueInput | null;
  structure: StructureWhereUniqueInput;
};
