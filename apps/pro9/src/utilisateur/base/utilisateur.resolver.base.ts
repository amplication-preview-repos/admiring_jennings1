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
import { Utilisateur } from "./Utilisateur";
import { UtilisateurCountArgs } from "./UtilisateurCountArgs";
import { UtilisateurFindManyArgs } from "./UtilisateurFindManyArgs";
import { UtilisateurFindUniqueArgs } from "./UtilisateurFindUniqueArgs";
import { CreateUtilisateurArgs } from "./CreateUtilisateurArgs";
import { UpdateUtilisateurArgs } from "./UpdateUtilisateurArgs";
import { DeleteUtilisateurArgs } from "./DeleteUtilisateurArgs";
import { Perimetre } from "../../perimetre/base/Perimetre";
import { UtilisateurService } from "../utilisateur.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Utilisateur)
export class UtilisateurResolverBase {
  constructor(
    protected readonly service: UtilisateurService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "read",
    possession: "any",
  })
  async _utilisateursMeta(
    @graphql.Args() args: UtilisateurCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Utilisateur])
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "read",
    possession: "any",
  })
  async utilisateurs(
    @graphql.Args() args: UtilisateurFindManyArgs
  ): Promise<Utilisateur[]> {
    return this.service.utilisateurs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Utilisateur, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "read",
    possession: "own",
  })
  async utilisateur(
    @graphql.Args() args: UtilisateurFindUniqueArgs
  ): Promise<Utilisateur | null> {
    const result = await this.service.utilisateur(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Utilisateur)
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "create",
    possession: "any",
  })
  async createUtilisateur(
    @graphql.Args() args: CreateUtilisateurArgs
  ): Promise<Utilisateur> {
    return await this.service.createUtilisateur({
      ...args,
      data: {
        ...args.data,

        perimetre: {
          connect: args.data.perimetre,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Utilisateur)
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "update",
    possession: "any",
  })
  async updateUtilisateur(
    @graphql.Args() args: UpdateUtilisateurArgs
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.updateUtilisateur({
        ...args,
        data: {
          ...args.data,

          perimetre: {
            connect: args.data.perimetre,
          },
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

  @graphql.Mutation(() => Utilisateur)
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "delete",
    possession: "any",
  })
  async deleteUtilisateur(
    @graphql.Args() args: DeleteUtilisateurArgs
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.deleteUtilisateur(args);
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
  @graphql.ResolveField(() => Perimetre, {
    nullable: true,
    name: "perimetre",
  })
  @nestAccessControl.UseRoles({
    resource: "Perimetre",
    action: "read",
    possession: "any",
  })
  async getPerimetre(
    @graphql.Parent() parent: Utilisateur
  ): Promise<Perimetre | null> {
    const result = await this.service.getPerimetre(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
