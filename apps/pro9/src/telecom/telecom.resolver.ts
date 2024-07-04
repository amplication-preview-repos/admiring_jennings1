import * as graphql from "@nestjs/graphql";
import { TelecomResolverBase } from "./base/telecom.resolver.base";
import { Telecom } from "./base/Telecom";
import { TelecomService } from "./telecom.service";

@graphql.Resolver(() => Telecom)
export class TelecomResolver extends TelecomResolverBase {
  constructor(protected readonly service: TelecomService) {
    super(service);
  }
}
