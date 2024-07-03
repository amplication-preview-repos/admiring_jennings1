import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { SalarieTitle } from "../salarie/SalarieTitle";

export const TelecomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="Salarie"
          reference="Salarie"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={SalarieTitle} />
        </ReferenceArrayInput>
        <TextInput label="Type de moyen" source="typeMoyen" />
        <div />
      </SimpleForm>
    </Create>
  );
};
