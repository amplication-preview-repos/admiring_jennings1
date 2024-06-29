import * as graphql from "@nestjs/graphql";
import { IdentiteResolverBase } from "./base/identite.resolver.base";
import { Identite } from "./base/Identite";
import { IdentiteService } from "./identite.service";

@graphql.Resolver(() => Identite)
export class IdentiteResolver extends IdentiteResolverBase {
  constructor(protected readonly service: IdentiteService) {
    super(service);
  }
}
