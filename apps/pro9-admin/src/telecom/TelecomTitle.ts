import { Telecom as TTelecom } from "../api/telecom/Telecom";

export const TELECOM_TITLE_FIELD = "id";

export const TelecomTitle = (record: TTelecom): string => {
  return record.id?.toString() || String(record.id);
};
