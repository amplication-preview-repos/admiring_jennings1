import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";
import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { TELECOM_TITLE_FIELD } from "./TelecomTitle";

export const TelecomShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Type de moyen" source="typeMoyen" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Valeur du moyen" source="valeurMoyen" />
        <ReferenceManyField
          reference="Salarie"
          target="telecomId"
          label="Salaries"
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
            <ReferenceField
              label="Telecom"
              source="telecom.id"
              reference="Telecom"
            >
              <TextField source={TELECOM_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
