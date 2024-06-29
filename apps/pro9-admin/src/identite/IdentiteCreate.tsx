import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { SalarieTitle } from "../salarie/SalarieTitle";

export const IdentiteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="civilite"
          label="Civilité"
          choices={[
            { label: "Homme", value: "Homme" },
            { label: "Femme", value: "Femme" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Code lieu de naissance" source="codeLieuNaissance" />
        <TextInput label="Commune de naissance" source="communeDeNaissance" />
        <DateTimeInput label="Date de naissance" source="dateNaissance" />
        <TextInput
          label="Département de naissance"
          source="departementDeNaissance"
        />
        <SelectInput
          source="nationalite"
          label="Nationalité"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Nom de naissance" source="nomNaissance" />
        <TextInput label="Nom usuel" source="nomUsuel" />
        <TextInput label="Numéro INSEE" source="numeroInsee" />
        <div />
        <TextInput label="Premier prénom" source="premierPrenom" />
        <TextInput label="Prénoms" source="prenoms" />
        <TextInput label="Prénom usuel" source="prenomUsuel" />
        <ReferenceInput source="salarie.id" reference="Salarie" label="Salarié">
          <SelectInput optionText={SalarieTitle} />
        </ReferenceInput>
        <SelectInput
          source="sexe"
          label="Sexe"
          choices={[
            { label: "Féminin", value: "Feminin" },
            { label: "Masculin", value: "Masculin" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
