import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PERIMETRE_TITLE_FIELD } from "../perimetre/PerimetreTitle";

export const UtilisateurList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Utilisateurs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="civilite" source="civilite" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateActivation" source="dateActivation" />
        <TextField label="dateDesactivation" source="dateDesactivation" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="mssEmail" source="mssEmail" />
        <TextField label="nom" source="nom" />
        <ReferenceField
          label="perimetre"
          source="perimetre.id"
          reference="Perimetre"
        >
          <TextField source={PERIMETRE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="prenom" source="prenom" />
        <TextField label="roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};
