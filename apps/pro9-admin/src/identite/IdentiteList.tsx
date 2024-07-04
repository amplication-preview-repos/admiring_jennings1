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
import { SALARIE_TITLE_FIELD } from "../salarie/SalarieTitle";

export const IdentiteList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Identites"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Civilite" source="civilite" />
        <TextField label="Code lieu de naissance" source="codeLieuNaissance" />
        <TextField label="Commune de naissance" source="communeDeNaissance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date de naissance" source="dateNaissance" />
        <TextField
          label="Departement de naissance"
          source="departementDeNaissance"
        />
        <TextField label="ID" source="id" />
        <TextField label="Nationalité" source="nationalite" />
        <TextField label="Nom de naissance" source="nomNaissance" />
        <TextField label="Nom usuel" source="nomUsuel" />
        <TextField label="Numero INSEE" source="numeroInsee" />
        <TextField label="Pays de naissance" source="paysDeNaissance" />
        <TextField label="Premier prenom" source="premierPrenom" />
        <TextField label="Prenoms" source="prenoms" />
        <TextField label="Prénom usuel" source="prenomUsuel" />
        <ReferenceField label="Salarie" source="salarie.id" reference="Salarie">
          <TextField source={SALARIE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Sexe" source="sexe" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
