import { SortOrder } from "../../util/SortOrder";

export type UtilisateurOrderByInput = {
  civilite?: SortOrder;
  createdAt?: SortOrder;
  dateActivation?: SortOrder;
  dateDesactivation?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  nom?: SortOrder;
  password?: SortOrder;
  prenom?: SortOrder;
  roles?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
