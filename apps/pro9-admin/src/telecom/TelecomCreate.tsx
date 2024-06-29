import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const TelecomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="Salarie.id" reference="Salarie" label="Salarié">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <SelectInput
          source="typeMoyen"
          label="Type de moyen"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <div />
      </SimpleForm>
    </Create>
  );
};
