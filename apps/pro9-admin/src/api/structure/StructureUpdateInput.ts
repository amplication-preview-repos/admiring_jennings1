import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AffectationUpdateManyWithoutStructuresInput } from "./AffectationUpdateManyWithoutStructuresInput";
import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";

export type StructureUpdateInput = {
  affectationDomaine?: AffectationWhereUniqueInput | null;
  affectations?: AffectationUpdateManyWithoutStructuresInput;
  libell?: string;
  perimetre?: PerimetreWhereUniqueInput | null;
  typeField?: "Agence" | "Association" | "Federation" | null;
};
