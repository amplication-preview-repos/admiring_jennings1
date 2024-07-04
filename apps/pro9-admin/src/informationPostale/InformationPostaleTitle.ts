import { InformationPostale as TInformationPostale } from "../api/informationPostale/InformationPostale";

export const INFORMATIONPOSTALE_TITLE_FIELD = "ancienCogCommune";

export const InformationPostaleTitle = (
  record: TInformationPostale
): string => {
  return record.ancienCogCommune?.toString() || String(record.id);
};
