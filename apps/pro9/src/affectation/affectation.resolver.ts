import * as graphql from "@nestjs/graphql";
import { AffectationResolverBase } from "./base/affectation.resolver.base";
import { Affectation } from "./base/Affectation";
import { AffectationService } from "./affectation.service";

@graphql.Resolver(() => Affectation)
export class AffectationResolver extends AffectationResolverBase {
  constructor(protected readonly service: AffectationService) {
    super(service);
  }
}
