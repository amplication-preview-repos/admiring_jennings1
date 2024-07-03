import { AffectationUpdateManyWithoutSalariesInput } from "./AffectationUpdateManyWithoutSalariesInput";
import { AdresseWhereUniqueInput } from "../adresse/AdresseWhereUniqueInput";
import { IdentiteWhereUniqueInput } from "../identite/IdentiteWhereUniqueInput";
import { TelecomWhereUniqueInput } from "../telecom/TelecomWhereUniqueInput";

export type SalarieUpdateInput = {
  affectations?: AffectationUpdateManyWithoutSalariesInput;
  demenegament?: AdresseWhereUniqueInput;
  domiciliation?: AdresseWhereUniqueInput;
  identite?: IdentiteWhereUniqueInput;
  statutAdmr?: boolean;
  statutVip?: boolean;
  telecom?: TelecomWhereUniqueInput | null;
};
