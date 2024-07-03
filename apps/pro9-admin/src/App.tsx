import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IdentiteList } from "./identite/IdentiteList";
import { IdentiteCreate } from "./identite/IdentiteCreate";
import { IdentiteEdit } from "./identite/IdentiteEdit";
import { IdentiteShow } from "./identite/IdentiteShow";
import { TelecomList } from "./telecom/TelecomList";
import { TelecomCreate } from "./telecom/TelecomCreate";
import { TelecomEdit } from "./telecom/TelecomEdit";
import { TelecomShow } from "./telecom/TelecomShow";
import { AffectationList } from "./affectation/AffectationList";
import { AffectationCreate } from "./affectation/AffectationCreate";
import { AffectationEdit } from "./affectation/AffectationEdit";
import { AffectationShow } from "./affectation/AffectationShow";
import { UtilisateurList } from "./utilisateur/UtilisateurList";
import { UtilisateurCreate } from "./utilisateur/UtilisateurCreate";
import { UtilisateurEdit } from "./utilisateur/UtilisateurEdit";
import { UtilisateurShow } from "./utilisateur/UtilisateurShow";
import { AdresseList } from "./adresse/AdresseList";
import { AdresseCreate } from "./adresse/AdresseCreate";
import { AdresseEdit } from "./adresse/AdresseEdit";
import { AdresseShow } from "./adresse/AdresseShow";
import { StructureList } from "./structure/StructureList";
import { StructureCreate } from "./structure/StructureCreate";
import { StructureEdit } from "./structure/StructureEdit";
import { StructureShow } from "./structure/StructureShow";
import { SalarieList } from "./salarie/SalarieList";
import { SalarieCreate } from "./salarie/SalarieCreate";
import { SalarieEdit } from "./salarie/SalarieEdit";
import { SalarieShow } from "./salarie/SalarieShow";
import { InformationPostaleList } from "./informationPostale/InformationPostaleList";
import { InformationPostaleCreate } from "./informationPostale/InformationPostaleCreate";
import { InformationPostaleEdit } from "./informationPostale/InformationPostaleEdit";
import { InformationPostaleShow } from "./informationPostale/InformationPostaleShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Pro9"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Identite"
          list={IdentiteList}
          edit={IdentiteEdit}
          create={IdentiteCreate}
          show={IdentiteShow}
        />
        <Resource
          name="Telecom"
          list={TelecomList}
          edit={TelecomEdit}
          create={TelecomCreate}
          show={TelecomShow}
        />
        <Resource
          name="Affectation"
          list={AffectationList}
          edit={AffectationEdit}
          create={AffectationCreate}
          show={AffectationShow}
        />
        <Resource
          name="Utilisateur"
          list={UtilisateurList}
          edit={UtilisateurEdit}
          create={UtilisateurCreate}
          show={UtilisateurShow}
        />
        <Resource
          name="Adresse"
          list={AdresseList}
          edit={AdresseEdit}
          create={AdresseCreate}
          show={AdresseShow}
        />
        <Resource
          name="Structure"
          list={StructureList}
          edit={StructureEdit}
          create={StructureCreate}
          show={StructureShow}
        />
        <Resource
          name="Salarie"
          list={SalarieList}
          edit={SalarieEdit}
          create={SalarieCreate}
          show={SalarieShow}
        />
        <Resource
          name="InformationPostale"
          list={InformationPostaleList}
          edit={InformationPostaleEdit}
          create={InformationPostaleCreate}
          show={InformationPostaleShow}
        />
      </Admin>
    </div>
  );
};

export default App;
