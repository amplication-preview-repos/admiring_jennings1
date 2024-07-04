import { Module } from "@nestjs/common";
import { StructureModuleBase } from "./base/structure.module.base";
import { StructureService } from "./structure.service";
import { StructureController } from "./structure.controller";
import { StructureResolver } from "./structure.resolver";

@Module({
  imports: [StructureModuleBase],
  controllers: [StructureController],
  providers: [StructureService, StructureResolver],
  exports: [StructureService],
})
export class StructureModule {}
