import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STRUCTURE_TITLE_FIELD } from "../structure/StructureTitle";
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";

export const AffectationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Affectations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Activité" source="activite" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Domaine"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <ReferenceField label="Salarié" source="salarie.id" reference="Salarie">
          <TextField source={SALARIE_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Structure"
          source="structure.id"
          reference="Structure"
        >
          <TextField source={STRUCTURE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
