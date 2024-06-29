import { Structure as TStructure } from "../api/structure/Structure";

export const STRUCTURE_TITLE_FIELD = "libell";

export const StructureTitle = (record: TStructure): string => {
  return record.libell?.toString() || String(record.id);
};
