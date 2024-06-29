import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AFFECTATION_TITLE_FIELD } from "../affectation/AffectationTitle";
import { PERIMETRE_TITLE_FIELD } from "../perimetre/PerimetreTitle";

export const StructureList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Structures"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Domaine d'une affectation"
          source="affectation.id"
          reference="Affectation"
        >
          <TextField source={AFFECTATION_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Libellé" source="libell" />
        <ReferenceField
          label="Périmètre"
          source="perimetre.id"
          reference="Perimetre"
        >
          <TextField source={PERIMETRE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="typeField" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
