import { Module } from "@nestjs/common";
import { IdentiteModule } from "./identite/identite.module";
import { TelecomModule } from "./telecom/telecom.module";
import { AffectationModule } from "./affectation/affectation.module";
import { UtilisateurModule } from "./utilisateur/utilisateur.module";
import { HabilitationModule } from "./habilitation/habilitation.module";
import { PerimetreModule } from "./perimetre/perimetre.module";
import { AdresseModule } from "./adresse/adresse.module";
import { StructureModule } from "./structure/structure.module";
import { SalarieModule } from "./salarie/salarie.module";
import { InformationPostaleModule } from "./informationPostale/informationPostale.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    IdentiteModule,
    TelecomModule,
    AffectationModule,
    UtilisateurModule,
    HabilitationModule,
    PerimetreModule,
    AdresseModule,
    StructureModule,
    SalarieModule,
    InformationPostaleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
