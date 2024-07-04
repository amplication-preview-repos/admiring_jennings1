import * as graphql from "@nestjs/graphql";
import { SalarieResolverBase } from "./base/salarie.resolver.base";
import { Salarie } from "./base/Salarie";
import { SalarieService } from "./salarie.service";

@graphql.Resolver(() => Salarie)
export class SalarieResolver extends SalarieResolverBase {
  constructor(protected readonly service: SalarieService) {
    super(service);
  }
}
