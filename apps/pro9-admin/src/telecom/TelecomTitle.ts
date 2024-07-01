import { Telecom as TTelecom } from "../api/telecom/Telecom";

export const TELECOM_TITLE_FIELD = "typeMoyen";

export const TelecomTitle = (record: TTelecom): string => {
  return record.typeMoyen?.toString() || String(record.id);
};
