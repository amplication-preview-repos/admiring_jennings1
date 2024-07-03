import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { STRUCTURE_TITLE_FIELD } from "./StructureTitle";
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";
import { AFFECTATION_TITLE_FIELD } from "../affectation/AffectationTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const StructureShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Affectation"
          target="structureId"
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
