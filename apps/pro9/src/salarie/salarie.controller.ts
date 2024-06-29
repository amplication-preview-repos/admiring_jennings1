import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalarieService } from "./salarie.service";
import { SalarieControllerBase } from "./base/salarie.controller.base";

@swagger.ApiTags("salaries")
@common.Controller("salaries")
export class SalarieController extends SalarieControllerBase {
  constructor(protected readonly service: SalarieService) {
    super(service);
  }
}
