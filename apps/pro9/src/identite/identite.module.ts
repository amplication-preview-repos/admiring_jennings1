import { Module } from "@nestjs/common";
import { IdentiteModuleBase } from "./base/identite.module.base";
import { IdentiteService } from "./identite.service";
import { IdentiteController } from "./identite.controller";
import { IdentiteResolver } from "./identite.resolver";

@Module({
  imports: [IdentiteModuleBase],
  controllers: [IdentiteController],
  providers: [IdentiteService, IdentiteResolver],
  exports: [IdentiteService],
})
export class IdentiteModule {}
