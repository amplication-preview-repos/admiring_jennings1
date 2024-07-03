import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { StructureTitle } from "../structure/StructureTitle";
import { SalarieTitle } from "../salarie/SalarieTitle";

export const AffectationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="activite"
          label="Activité"
          choices={[
            { label: "Domicile", value: "Domicile" },
            { label: "Soin", value: "Soin" },
            { label: "Repas", value: "Repas" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="domaine.id"
          reference="Structure"
          label="Domaine"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
        <ReferenceInput source="salarie.id" reference="Salarie" label="Salarie">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
