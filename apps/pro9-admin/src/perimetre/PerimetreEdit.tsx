import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StructureTitle } from "../structure/StructureTitle";
import { UtilisateurTitle } from "../utilisateur/UtilisateurTitle";

export const PerimetreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
