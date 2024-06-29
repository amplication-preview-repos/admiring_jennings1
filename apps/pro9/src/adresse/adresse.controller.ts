import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AdresseService } from "./adresse.service";
import { AdresseControllerBase } from "./base/adresse.controller.base";

@swagger.ApiTags("adresses")
@common.Controller("adresses")
export class AdresseController extends AdresseControllerBase {
  constructor(protected readonly service: AdresseService) {
    super(service);
  }
}
