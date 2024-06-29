import { Module } from "@nestjs/common";
import { HabilitationModuleBase } from "./base/habilitation.module.base";
import { HabilitationService } from "./habilitation.service";
import { HabilitationController } from "./habilitation.controller";
import { HabilitationResolver } from "./habilitation.resolver";

@Module({
  imports: [HabilitationModuleBase],
  controllers: [HabilitationController],
  providers: [HabilitationService, HabilitationResolver],
  exports: [HabilitationService],
})
export class HabilitationModule {}
