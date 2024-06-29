import { Module } from "@nestjs/common";
import { PerimetreModuleBase } from "./base/perimetre.module.base";
import { PerimetreService } from "./perimetre.service";
import { PerimetreController } from "./perimetre.controller";
import { PerimetreResolver } from "./perimetre.resolver";

@Module({
  imports: [PerimetreModuleBase],
  controllers: [PerimetreController],
  providers: [PerimetreService, PerimetreResolver],
  exports: [PerimetreService],
})
export class PerimetreModule {}
