import { SortOrder } from "../../util/SortOrder";

export type HabilitationOrderByInput = {
  createdAt?: SortOrder;
  gestionAdministration?: SortOrder;
  gestionUtilisateur?: SortOrder;
  id?: SortOrder;
  perimetreId?: SortOrder;
  updatedAt?: SortOrder;
  utilisateurId?: SortOrder;
};
