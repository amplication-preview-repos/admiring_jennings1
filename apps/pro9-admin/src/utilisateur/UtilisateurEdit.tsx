import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  PasswordInput,
  ReferenceInput,
  SelectInput,
  SelectArrayInput,
} from "react-admin";

import { PerimetreTitle } from "../perimetre/PerimetreTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="civilite" source="civilite" />
        <DateTimeInput label="dateActivation" source="dateActivation" />
        <DateTimeInput label="dateDesactivation" source="dateDesactivation" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="mssEmail" source="mssEmail" type="email" />
        <TextInput label="nom" source="nom" />
        <PasswordInput label="password" source="password" />
        <ReferenceInput
          source="perimetre.id"
          reference="Perimetre"
          label="perimetre"
        >
          <SelectInput optionText={PerimetreTitle} />
        </ReferenceInput>
        <TextInput label="prenom" source="prenom" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
