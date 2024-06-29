import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const TelecomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
