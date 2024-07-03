import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";
import { SALARIE_TITLE_FIELD } from "./SalarieTitle";
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";
import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { TELECOM_TITLE_FIELD } from "../telecom/TelecomTitle";

export const SalarieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Affectation"
          target="salarieId"
          label="Affectations"
        >
          <Datagrid rowClick="show">
            <TextField label="Activité" source="activite" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Domaine"
              source="structure.id"
              reference="Structure"
            >
              <TextField source={STRUCTURE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Salarie"
              source="salarie.id"
              reference="Salarie"
            >
              <TextField source={SALARIE_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Structure"
              source="structure.id"
              reference="Structure"
            >
              <TextField source={STRUCTURE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
