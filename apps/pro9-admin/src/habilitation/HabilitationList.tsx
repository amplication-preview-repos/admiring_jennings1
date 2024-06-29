import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PERIMETRE_TITLE_FIELD } from "../perimetre/PerimetreTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const HabilitationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Habilitations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <BooleanField
          label="Gestion administratif"
          source="gestionAdministration"
        />
        <BooleanField label="Gestion utilisateur" source="gestionUtilisateur" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Périmètre"
          source="perimetre.id"
          reference="Perimetre"
        >
          <TextField source={PERIMETRE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="Utilisateur"
          source="utilisateur.id"
          reference="Utilisateur"
        >
          <TextField source={UTILISATEUR_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
