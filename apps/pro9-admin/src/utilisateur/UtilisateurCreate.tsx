import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { HabilitationTitle } from "../habilitation/HabilitationTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UtilisateurCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="civilite" source="civilite" />
        <DateTimeInput label="dateActivation" source="dateActivation" />
        <DateTimeInput label="dateDesactivation" source="dateDesactivation" />
        <TextInput label="email" source="email" type="email" />
        <ReferenceInput
          source="habilitation.id"
          reference="Habilitation"
          label="Habilitations"
        >
          <SelectInput optionText={HabilitationTitle} />
        </ReferenceInput>
        <TextInput label="mssEmail" source="mssEmail" type="email" />
        <TextInput label="nom" source="nom" />
        <PasswordInput label="password" source="password" />
        <TextInput label="prenom" source="prenom" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
