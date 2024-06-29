import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PerimetreTitle } from "../perimetre/PerimetreTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const HabilitationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput
          label="Gestion administratif"
          source="gestionAdministration"
        />
        <BooleanInput label="Gestion utilisateur" source="gestionUtilisateur" />
        <ReferenceInput
          source="perimetre.id"
          reference="Perimetre"
          label="Périmètre"
        >
          <SelectInput optionText={PerimetreTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="utilisateur.id"
          reference="Utilisateur"
          label="Utilisateur"
        >
          <SelectInput optionText={UtilisateurTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
