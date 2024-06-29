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
import { HABILITATION_TITLE_FIELD } from "../habilitation/HabilitationTitle";

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
        <ReferenceField
          label="Habilitations"
          source="habilitation.id"
          reference="Habilitation"
        >
          <TextField source={HABILITATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="mssEmail" source="mssEmail" />
        <TextField label="nom" source="nom" />
        <TextField label="prenom" source="prenom" />
        <TextField label="role" source="role" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </Datagrid>
    </List>
  );
};
