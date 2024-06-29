import * as graphql from "@nestjs/graphql";
import { AdresseResolverBase } from "./base/adresse.resolver.base";
import { Adresse } from "./base/Adresse";
import { AdresseService } from "./adresse.service";

@graphql.Resolver(() => Adresse)
export class AdresseResolver extends AdresseResolverBase {
  constructor(protected readonly service: AdresseService) {
    super(service);
  }
}
