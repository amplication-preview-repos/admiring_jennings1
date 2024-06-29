import { Module } from "@nestjs/common";
import { AffectationModuleBase } from "./base/affectation.module.base";
import { AffectationService } from "./affectation.service";
import { AffectationController } from "./affectation.controller";
import { AffectationResolver } from "./affectation.resolver";

@Module({
  imports: [AffectationModuleBase],
  controllers: [AffectationController],
  providers: [AffectationService, AffectationResolver],
  exports: [AffectationService],
})
export class AffectationModule {}
