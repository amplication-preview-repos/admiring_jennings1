/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Salarie } from "./Salarie";
import { SalarieCountArgs } from "./SalarieCountArgs";
import { SalarieFindManyArgs } from "./SalarieFindManyArgs";
import { SalarieFindUniqueArgs } from "./SalarieFindUniqueArgs";
import { CreateSalarieArgs } from "./CreateSalarieArgs";
import { UpdateSalarieArgs } from "./UpdateSalarieArgs";
import { DeleteSalarieArgs } from "./DeleteSalarieArgs";
import { Affectation } from "../../affectation/base/Affectation";
import { Adresse } from "../../adresse/base/Adresse";
import { Identite } from "../../identite/base/Identite";
import { Telecom } from "../../telecom/base/Telecom";
import { SalarieService } from "../salarie.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Salarie)
export class SalarieResolverBase {
  constructor(
    protected readonly service: SalarieService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Salarie",
    action: "read",
    possession: "any",
  })
  async _salariesMeta(
    @graphql.Args() args: SalarieCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Salarie])
  @nestAccessControl.UseRoles({
    resource: "Salarie",
    action: "read",
    possession: "any",
  })
  async salaries(
    @graphql.Args() args: SalarieFindManyArgs
  ): Promise<Salarie[]> {
    return this.service.salaries(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Salarie, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Salarie",
    action: "read",
    possession: "own",
  })
  async salarie(
    @graphql.Args() args: SalarieFindUniqueArgs
  ): Promise<Salarie | null> {
    const result = await this.service.salarie(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Salarie)
  @nestAccessControl.UseRoles({
    resource: "Salarie",
    action: "create",
    possession: "any",
  })
  async createSalarie(
    @graphql.Args() args: CreateSalarieArgs
  ): Promise<Salarie> {
    return await this.service.createSalarie({
      ...args,
      data: {
        ...args.data,

        affectations: {
          connect: args.data.affectations,
        },

        demenegament: {
          connect: args.data.demenegament,
        },

        domiciliation: {
          connect: args.data.domiciliation,
        },

        identite: {
          connect: args.data.identite,
        },

        telecom: args.data.telecom
          ? {
              connect: args.data.telecom,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Salarie)
  @nestAccessControl.UseRoles({
    resource: "Salarie",
    action: "update",
    possession: "any",
  })
  async updateSalarie(
    @graphql.Args() args: UpdateSalarieArgs
  ): Promise<Salarie | null> {
    try {
      return await this.service.updateSalarie({
        ...args,
        data: {
          ...args.data,

          affectations: {
            connect: args.data.affectations,
          },

          demenegament: {
            connect: args.data.demenegament,
          },

          domiciliation: {
            connect: args.data.domiciliation,
          },

          identite: {
            connect: args.data.identite,
          },

          telecom: args.data.telecom
            ? {
                connect: args.data.telecom,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Salarie)
  @nestAccessControl.UseRoles({
    resource: "Salarie",
    action: "delete",
    possession: "any",
  })
  async deleteSalarie(
    @graphql.Args() args: DeleteSalarieArgs
  ): Promise<Salarie | null> {
    try {
      return await this.service.deleteSalarie(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Affectation, {
    nullable: true,
    name: "affectations",
  })
  @nestAccessControl.UseRoles({
    resource: "Affectation",
    action: "read",
    possession: "any",
  })
  async getAffectations(
    @graphql.Parent() parent: Salarie
  ): Promise<Affectation | null> {
    const result = await this.service.getAffectations(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Adresse, {
    nullable: true,
    name: "demenegament",
  })
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "read",
    possession: "any",
  })
  async getDemenegament(
    @graphql.Parent() parent: Salarie
  ): Promise<Adresse | null> {
    const result = await this.service.getDemenegament(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Adresse, {
    nullable: true,
    name: "domiciliation",
  })
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "read",
    possession: "any",
  })
  async getDomiciliation(
    @graphql.Parent() parent: Salarie
  ): Promise<Adresse | null> {
    const result = await this.service.getDomiciliation(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Identite, {
    nullable: true,
    name: "identite",
  })
  @nestAccessControl.UseRoles({
    resource: "Identite",
    action: "read",
    possession: "any",
  })
  async getIdentite(
    @graphql.Parent() parent: Salarie
  ): Promise<Identite | null> {
    const result = await this.service.getIdentite(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Telecom, {
    nullable: true,
    name: "telecom",
  })
  @nestAccessControl.UseRoles({
    resource: "Telecom",
    action: "read",
    possession: "any",
  })
  async getTelecom(@graphql.Parent() parent: Salarie): Promise<Telecom | null> {
    const result = await this.service.getTelecom(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
