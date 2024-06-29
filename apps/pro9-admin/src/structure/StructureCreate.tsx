import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AffectationTitle } from "../affectation/AffectationTitle";
import { PerimetreTitle } from "../perimetre/PerimetreTitle";

export const StructureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="affectationDomaine.id"
          reference="Affectation"
          label="Domaine d'une affectation"
        >
          <SelectInput optionText={AffectationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="affectations"
          reference="Affectation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AffectationTitle} />
        </ReferenceArrayInput>
        <TextInput label="Libellé" source="libell" />
        <ReferenceInput
          source="perimetre.id"
          reference="Perimetre"
          label="Périmètre"
        >
          <SelectInput optionText={PerimetreTitle} />
        </ReferenceInput>
        <SelectInput
          source="typeField"
          label="Type"
          choices={[
            { label: "Agence", value: "Agence" },
            { label: "Association", value: "Association" },
            { label: "Fédération", value: "Federation" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
