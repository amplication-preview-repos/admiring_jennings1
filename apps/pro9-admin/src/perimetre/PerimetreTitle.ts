import { Perimetre as TPerimetre } from "../api/perimetre/Perimetre";

export const PERIMETRE_TITLE_FIELD = "id";

export const PerimetreTitle = (record: TPerimetre): string => {
  return record.id?.toString() || String(record.id);
};
