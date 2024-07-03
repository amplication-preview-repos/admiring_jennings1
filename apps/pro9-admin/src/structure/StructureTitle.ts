import { Structure as TStructure } from "../api/structure/Structure";

export const STRUCTURE_TITLE_FIELD = "code";

export const StructureTitle = (record: TStructure): string => {
  return record.code?.toString() || String(record.id);
};
