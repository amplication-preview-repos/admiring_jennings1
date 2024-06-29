import { AffectationWhereUniqueInput } from "../affectation/AffectationWhereUniqueInput";
import { AffectationCreateNestedManyWithoutStructuresInput } from "./AffectationCreateNestedManyWithoutStructuresInput";
import { PerimetreWhereUniqueInput } from "../perimetre/PerimetreWhereUniqueInput";

export type StructureCreateInput = {
  affectationDomaine?: AffectationWhereUniqueInput | null;
  affectations?: AffectationCreateNestedManyWithoutStructuresInput;
  libell: string;
  perimetre: PerimetreWhereUniqueInput | null;
  typeField?: "Agence" | "Association" | "Federation" | null;
};
