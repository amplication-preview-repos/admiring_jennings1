import { Adresse as TAdresse } from "../api/adresse/Adresse";

export const ADRESSE_TITLE_FIELD = "id";

export const AdresseTitle = (record: TAdresse): string => {
  return record.id?.toString() || String(record.id);
};
