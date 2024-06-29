import { Habilitation as THabilitation } from "../api/habilitation/Habilitation";

export const HABILITATION_TITLE_FIELD = "id";

export const HabilitationTitle = (record: THabilitation): string => {
  return record.id?.toString() || String(record.id);
};
