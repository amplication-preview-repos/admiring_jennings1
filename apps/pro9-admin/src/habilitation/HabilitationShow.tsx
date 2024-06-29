import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  BooleanField,
  TextField,
  ReferenceField,
} from "react-admin";

import { PERIMETRE_TITLE_FIELD } from "../perimetre/PerimetreTitle";
import { UTILISATEUR_TITLE_FIELD } from "../utilisateur/UtilisateurTitle";

export const HabilitationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <BooleanField
          label="Gestion administratif"
          source="gestionAdministration"
        />
        <BooleanField label="Gestion utilisateur" source="gestionUtilisateur" />
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
      </SimpleShowLayout>
    </Show>
  );
};
