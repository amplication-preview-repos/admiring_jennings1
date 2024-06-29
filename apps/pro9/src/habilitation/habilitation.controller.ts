import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HabilitationService } from "./habilitation.service";
import { HabilitationControllerBase } from "./base/habilitation.controller.base";

@swagger.ApiTags("habilitations")
@common.Controller("habilitations")
export class HabilitationController extends HabilitationControllerBase {
  constructor(protected readonly service: HabilitationService) {
    super(service);
  }
}
