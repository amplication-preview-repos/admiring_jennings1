import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";
import { INFORMATIONPOSTALE_TITLE_FIELD } from "../informationPostale/InformationPostaleTitle";

export const AdresseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Début validité" source="debutValidite" />
        <ReferenceField
          label="Déménagement salariés"
          source="salarie.id"
          reference="Salarie"
        >
          <TextField source={SALARIE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Domiciliation salarie"
          source="salarie.id"
          reference="Salarie"
        >
          <TextField source={SALARIE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Fin validité" source="finValidite" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Information postale"
          source="informationpostale.id"
          reference="InformationPostale"
        >
          <TextField source={INFORMATIONPOSTALE_TITLE_FIELD} />
        </ReferenceField>
        <TextField
          label="Localisation Initiale"
          source="localisationInitiale"
        />
        <TextField label="Localisation precise" source="localisationPrecise" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
