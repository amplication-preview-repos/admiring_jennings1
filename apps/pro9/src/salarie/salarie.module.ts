import { Module } from "@nestjs/common";
import { SalarieModuleBase } from "./base/salarie.module.base";
import { SalarieService } from "./salarie.service";
import { SalarieController } from "./salarie.controller";
import { SalarieResolver } from "./salarie.resolver";

@Module({
  imports: [SalarieModuleBase],
  controllers: [SalarieController],
  providers: [SalarieService, SalarieResolver],
  exports: [SalarieService],
})
export class SalarieModule {}
