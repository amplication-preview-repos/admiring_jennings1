import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { HABILITATION_TITLE_FIELD } from "../habilitation/HabilitationTitle";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
      </SimpleShowLayout>
    </Show>
  );
};
