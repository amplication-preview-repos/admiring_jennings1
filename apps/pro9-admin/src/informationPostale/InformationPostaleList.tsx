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
import { ADRESSE_TITLE_FIELD } from "../adresse/AdresseTitle";

export const InformationPostaleList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Informations Postale"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Adresse" source="adresse.id" reference="Adresse">
          <TextField source={ADRESSE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Ancien cog de la commune" source="ancienCogCommune" />
        <TextField label="Cog de la commune" source="cogCommune" />
        <TextField label="Cog du pays" source="cogPays" />
        <TextField
          label="Complément d'adresse extérieure"
          source="complementAdresseExterieur"
        />
        <TextField
          label="Complément d'adresse intérieur"
          source="complementAdresseInterieur"
        />
        <TextField label="Complément de voie" source="complementVoie" />
        <TextField label="Code postal de la commune" source="cpCommune" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Libellé de la commune" source="libelleCommune" />
        <TextField label="Libellé du pays" source="libellePays" />
        <TextField label="Libellé de la voie" source="libelleVoie" />
        <TextField label="Matricule de la voie" source="matriculeVoie" />
        <TextField label="Mention postale" source="mentionPostal" />
        <TextField label="Numéro de voie" source="numeroVoie" />
        <TextField label="Type abrégé de voie" source="typeAbregeVoie" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
