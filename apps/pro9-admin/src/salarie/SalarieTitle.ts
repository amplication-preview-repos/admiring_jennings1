import { Salarie as TSalarie } from "../api/salarie/Salarie";

export const SALARIE_TITLE_FIELD = "id";

export const SalarieTitle = (record: TSalarie): string => {
  return record.id?.toString() || String(record.id);
};
