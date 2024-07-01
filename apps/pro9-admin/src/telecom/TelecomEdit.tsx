import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const TelecomEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="Salarie.id" reference="Salarie" label="Salarié">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <TextInput label="Type de moyen" source="typeMoyen" />
        <div />
      </SimpleForm>
    </Edit>
  );
};
