import * as graphql from "@nestjs/graphql";
import { PerimetreResolverBase } from "./base/perimetre.resolver.base";
import { Perimetre } from "./base/Perimetre";
import { PerimetreService } from "./perimetre.service";

@graphql.Resolver(() => Perimetre)
export class PerimetreResolver extends PerimetreResolverBase {
  constructor(protected readonly service: PerimetreService) {
    super(service);
  }
}
