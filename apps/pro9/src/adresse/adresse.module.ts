import { Module } from "@nestjs/common";
import { AdresseModuleBase } from "./base/adresse.module.base";
import { AdresseService } from "./adresse.service";
import { AdresseController } from "./adresse.controller";
import { AdresseResolver } from "./adresse.resolver";

@Module({
  imports: [AdresseModuleBase],
  controllers: [AdresseController],
  providers: [AdresseService, AdresseResolver],
  exports: [AdresseService],
})
export class AdresseModule {}
