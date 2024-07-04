import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AffectationService } from "./affectation.service";
import { AffectationControllerBase } from "./base/affectation.controller.base";

@swagger.ApiTags("affectations")
@common.Controller("affectations")
export class AffectationController extends AffectationControllerBase {
  constructor(protected readonly service: AffectationService) {
    super(service);
  }
}
