import * as graphql from "@nestjs/graphql";
import { HabilitationResolverBase } from "./base/habilitation.resolver.base";
import { Habilitation } from "./base/Habilitation";
import { HabilitationService } from "./habilitation.service";

@graphql.Resolver(() => Habilitation)
export class HabilitationResolver extends HabilitationResolverBase {
  constructor(protected readonly service: HabilitationService) {
    super(service);
  }
}
