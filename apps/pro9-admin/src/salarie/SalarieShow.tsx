import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";

import { AFFECTATION_TITLE_FIELD } from "../affectation/AffectationTitle";
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";
import { IDENTITE_TITLE_FIELD } from "../identite/IdentiteTitle";
import { TELECOM_TITLE_FIELD } from "../telecom/TelecomTitle";

export const SalarieShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Affectation"
          source="affectation.id"
          reference="Affectation"
        >
          <TextField source={AFFECTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Déménagement"
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
      </SimpleShowLayout>
    </Show>
  );
};
