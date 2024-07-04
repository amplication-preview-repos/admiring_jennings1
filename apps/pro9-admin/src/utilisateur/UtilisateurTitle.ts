import { Utilisateur as TUtilisateur } from "../api/utilisateur/Utilisateur";

export const UTILISATEUR_TITLE_FIELD = "username";

export const UtilisateurTitle = (record: TUtilisateur): string => {
  return record.username?.toString() || String(record.id);
};
