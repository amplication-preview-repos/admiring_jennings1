import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IdentiteService } from "./identite.service";
import { IdentiteControllerBase } from "./base/identite.controller.base";

@swagger.ApiTags("identites")
@common.Controller("identites")
export class IdentiteController extends IdentiteControllerBase {
  constructor(protected readonly service: IdentiteService) {
    super(service);
  }
}
