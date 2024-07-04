import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TelecomService } from "./telecom.service";
import { TelecomControllerBase } from "./base/telecom.controller.base";

@swagger.ApiTags("telecoms")
@common.Controller("telecoms")
export class TelecomController extends TelecomControllerBase {
  constructor(protected readonly service: TelecomService) {
    super(service);
  }
}
