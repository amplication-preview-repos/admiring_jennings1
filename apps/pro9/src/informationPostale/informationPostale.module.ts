import { Module } from "@nestjs/common";
import { InformationPostaleModuleBase } from "./base/informationPostale.module.base";
import { InformationPostaleService } from "./informationPostale.service";
import { InformationPostaleController } from "./informationPostale.controller";
import { InformationPostaleResolver } from "./informationPostale.resolver";

@Module({
  imports: [InformationPostaleModuleBase],
  controllers: [InformationPostaleController],
  providers: [InformationPostaleService, InformationPostaleResolver],
  exports: [InformationPostaleService],
})
export class InformationPostaleModule {}
