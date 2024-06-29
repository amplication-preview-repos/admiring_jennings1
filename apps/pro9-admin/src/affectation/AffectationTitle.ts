import { Affectation as TAffectation } from "../api/affectation/Affectation";

export const AFFECTATION_TITLE_FIELD = "id";

export const AffectationTitle = (record: TAffectation): string => {
  return record.id?.toString() || String(record.id);
};
