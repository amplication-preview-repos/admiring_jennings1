import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StructureTitle } from "../structure/StructureTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const PerimetreCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="structure.id"
          reference="Structure"
          label="Structure"
        >
          <SelectInput optionText={StructureTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="utilisateurs"
          reference="Utilisateur"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UtilisateurTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
