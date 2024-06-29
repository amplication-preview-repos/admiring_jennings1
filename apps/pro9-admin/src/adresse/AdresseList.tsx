import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";
import { INFORMATIONPOSTALE_TITLE_FIELD } from "../informationPostale/InformationPostaleTitle";

export const AdresseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Adresses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
          label="Domiciliation salarié"
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
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
