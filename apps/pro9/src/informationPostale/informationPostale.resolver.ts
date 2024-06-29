import * as graphql from "@nestjs/graphql";
import { InformationPostaleResolverBase } from "./base/informationPostale.resolver.base";
import { InformationPostale } from "./base/InformationPostale";
import { InformationPostaleService } from "./informationPostale.service";

@graphql.Resolver(() => InformationPostale)
export class InformationPostaleResolver extends InformationPostaleResolverBase {
  constructor(protected readonly service: InformationPostaleService) {
    super(service);
  }
}
