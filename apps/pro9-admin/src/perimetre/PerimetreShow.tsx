import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { PERIMETRE_TITLE_FIELD } from "./PerimetreTitle";
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";

export const PerimetreShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Structure"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Utilisateur"
          target="perimetreId"
          label="Utilisateurs"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
