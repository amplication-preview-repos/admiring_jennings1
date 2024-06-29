import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { AffectationTitle } from "../affectation/AffectationTitle";
import { AdresseTitle } from "../adresse/AdresseTitle";
import { IdentiteTitle } from "../identite/IdentiteTitle";
import { TelecomTitle } from "../telecom/TelecomTitle";

export const SalarieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="affectations.id"
          reference="Affectation"
          label="Affectation"
        >
          <SelectInput optionText={AffectationTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="demenegament.id"
          reference="Adresse"
          label="Déménagement"
        >
          <SelectInput optionText={AdresseTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="domiciliation.id"
          reference="Adresse"
          label="Domiciliation"
        >
          <SelectInput optionText={AdresseTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="identite.id"
          reference="Identite"
          label="Identite"
        >
          <SelectInput optionText={IdentiteTitle} />
        </ReferenceInput>
        <BooleanInput label="Statut ADMR" source="statutAdmr" />
        <BooleanInput label="Statut VIP" source="statutVip" />
        <ReferenceInput source="telecom.id" reference="Telecom" label="Telecom">
          <SelectInput optionText={TelecomTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
