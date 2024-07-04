import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { AFFECTATION_TITLE_FIELD } from "../affectation/AffectationTitle";
import { UTILISATEUR_TITLE_FIELD } from "./UtilisateurTitle";

export const UtilisateurShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="civilite" source="civilite" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateActivation" source="dateActivation" />
        <TextField label="dateDesactivation" source="dateDesactivation" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="nom" source="nom" />
        <TextField label="prenom" source="prenom" />
        <TextField label="roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="username" source="username" />
        <ReferenceManyField
          reference="Structure"
          target="utilisateurId"
          label="Structures"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Domaine d'une affectation"
              source="affectation.id"
              reference="Affectation"
            >
              <TextField source={AFFECTATION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Code" source="code" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Utilisateur"
              source="utilisateur.id"
              reference="Utilisateur"
            >
              <TextField source={UTILISATEUR_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
