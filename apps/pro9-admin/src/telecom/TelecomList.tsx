import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TelecomList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Telecoms"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Type de moyen" source="typeMoyen" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Valeur du moyen" source="valeurMoyen" />
      </Datagrid>
    </List>
  );
};
