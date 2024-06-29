import { Identite as TIdentite } from "../api/identite/Identite";

export const IDENTITE_TITLE_FIELD = "codeLieuNaissance";

export const IdentiteTitle = (record: TIdentite): string => {
  return record.codeLieuNaissance?.toString() || String(record.id);
};
