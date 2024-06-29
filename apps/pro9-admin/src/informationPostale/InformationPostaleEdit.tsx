import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { AdresseTitle } from "../adresse/AdresseTitle";

export const InformationPostaleEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="adresse.id" reference="Adresse" label="Adresse">
          <SelectInput optionText={AdresseTitle} />
        </ReferenceInput>
        <TextInput label="Ancien cog de la commune" source="ancienCogCommune" />
        <TextInput label="Cog de la commune" source="cogCommune" />
        <TextInput label="Cog du pays" source="cogPays" />
        <TextInput
          label="Complément d'adresse extérieure"
          source="complementAdresseExterieur"
        />
        <TextInput
          label="Complément d'adresse intérieur"
          source="complementAdresseInterieur"
        />
        <TextInput label="Complément de voie" source="complementVoie" />
        <TextInput label="Code postal de la commune" source="cpCommune" />
        <TextInput label="Libellé de la commune" source="libelleCommune" />
        <TextInput label="Libellé du pays" source="libellePays" />
        <TextInput label="Libellé de la voie" source="libelleVoie" />
        <TextInput label="Matricule de la voie" source="matriculeVoie" />
        <TextInput label="Mention postale" source="mentionPostal" />
        <NumberInput step={1} label="Numéro de voie" source="numeroVoie" />
        <TextInput label="Type abrégé de voie" source="typeAbregeVoie" />
      </SimpleForm>
    </Edit>
  );
};
