import { Module } from "@nestjs/common";
import { TelecomModuleBase } from "./base/telecom.module.base";
import { TelecomService } from "./telecom.service";
import { TelecomController } from "./telecom.controller";
import { TelecomResolver } from "./telecom.resolver";

@Module({
  imports: [TelecomModuleBase],
  controllers: [TelecomController],
  providers: [TelecomService, TelecomResolver],
  exports: [TelecomService],
})
export class TelecomModule {}
