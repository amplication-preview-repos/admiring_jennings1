import * as graphql from "@nestjs/graphql";
import { StructureResolverBase } from "./base/structure.resolver.base";
import { Structure } from "./base/Structure";
import { StructureService } from "./structure.service";

@graphql.Resolver(() => Structure)
export class StructureResolver extends StructureResolverBase {
  constructor(protected readonly service: StructureService) {
    super(service);
  }
}
