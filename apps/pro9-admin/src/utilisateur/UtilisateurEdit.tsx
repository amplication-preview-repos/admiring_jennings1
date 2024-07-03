import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { StructureTitle } from "../structure/StructureTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UtilisateurEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="civilite" source="civilite" />
        <DateTimeInput label="dateActivation" source="dateActivation" />
        <DateTimeInput label="dateDesactivation" source="dateDesactivation" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="nom" source="nom" />
        <PasswordInput label="password" source="password" />
        <TextInput label="prenom" source="prenom" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="structures"
          reference="Structure"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StructureTitle} />
        </ReferenceArrayInput>
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
