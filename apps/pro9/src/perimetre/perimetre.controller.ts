import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PerimetreService } from "./perimetre.service";
import { PerimetreControllerBase } from "./base/perimetre.controller.base";

@swagger.ApiTags("perimetres")
@common.Controller("perimetres")
export class PerimetreController extends PerimetreControllerBase {
  constructor(protected readonly service: PerimetreService) {
    super(service);
  }
}
