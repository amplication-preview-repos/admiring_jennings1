import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";
import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { TELECOM_TITLE_FIELD } from "../telecom/TelecomTitle";

export const SalarieList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Salaries"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Demenagement"
          source="adresse.id"
          reference="Adresse"
        >
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Domiciliation"
          source="adresse.id"
          reference="Adresse"
        >
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Identite"
          source="identite.id"
          reference="Identite"
        >
          <TextField source={IDENTITE_TITLE_FIELD} />
        </ReferenceField>
        <BooleanField label="Statut ADMR" source="statutAdmr" />
        <BooleanField label="Statut VIP" source="statutVip" />
        <ReferenceField label="Telecom" source="telecom.id" reference="Telecom">
          <TextField source={TELECOM_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
