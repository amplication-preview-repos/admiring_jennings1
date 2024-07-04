import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { SalarieTitle } from "../salarie/SalarieTitle";
import { InformationPostaleTitle } from "../informationPostale/InformationPostaleTitle";

export const AdresseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="Début validité" source="debutValidite" />
        <ReferenceInput
          source="demanagementSalaries.id"
          reference="Salarie"
          label="Déménagement salariés"
        >
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="DomiciliationSalarie.id"
          reference="Salarie"
          label="Domiciliation salarie"
        >
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <DateTimeInput label="Fin validité" source="finValidite" />
        <ReferenceInput
          source="informationPostale.id"
          reference="InformationPostale"
          label="Information postale"
        >
          <SelectInput optionText={InformationPostaleTitle} />
        </ReferenceInput>
        <TextInput
          label="Localisation Initiale"
          source="localisationInitiale"
        />
        <TextInput label="Localisation precise" source="localisationPrecise" />
      </SimpleForm>
    </Create>
  );
};
