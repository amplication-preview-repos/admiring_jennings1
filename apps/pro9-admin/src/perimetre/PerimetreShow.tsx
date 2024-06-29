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
  BooleanField,
} from "react-admin";

import { PERIMETRE_TITLE_FIELD } from "./PerimetreTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";
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
          reference="Habilitation"
          target="perimetreId"
          label="Habilitations"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <BooleanField
              label="Gestion administratif"
              source="gestionAdministration"
            />
            <BooleanField
              label="Gestion utilisateur"
              source="gestionUtilisateur"
            />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Périmètre"
              source="perimetre.id"
              reference="Perimetre"
            >
              <TextField source={PERIMETRE_TITLE_FIELD} />
            </ReferenceField>
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
