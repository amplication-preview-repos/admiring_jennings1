import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
} from "react-admin";

import { HabilitationTitle } from "../habilitation/HabilitationTitle";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
        <SelectInput
          source="role"
          label="role"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
