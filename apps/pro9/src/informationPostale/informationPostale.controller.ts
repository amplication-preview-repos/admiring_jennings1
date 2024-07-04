import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InformationPostaleService } from "./informationPostale.service";
import { InformationPostaleControllerBase } from "./base/informationPostale.controller.base";

@swagger.ApiTags("informationPostales")
@common.Controller("informationPostales")
export class InformationPostaleController extends InformationPostaleControllerBase {
  constructor(protected readonly service: InformationPostaleService) {
    super(service);
  }
}
