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
import { Identite } from "./Identite";
import { IdentiteCountArgs } from "./IdentiteCountArgs";
import { IdentiteFindManyArgs } from "./IdentiteFindManyArgs";
import { IdentiteFindUniqueArgs } from "./IdentiteFindUniqueArgs";
import { CreateIdentiteArgs } from "./CreateIdentiteArgs";
import { UpdateIdentiteArgs } from "./UpdateIdentiteArgs";
import { DeleteIdentiteArgs } from "./DeleteIdentiteArgs";
import { Salarie } from "../../salarie/base/Salarie";
import { IdentiteService } from "../identite.service";
@graphql.Resolver(() => Identite)
export class IdentiteResolverBase {
  constructor(protected readonly service: IdentiteService) {}

  async _identitesMeta(
    @graphql.Args() args: IdentiteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Identite])
  async identites(
    @graphql.Args() args: IdentiteFindManyArgs
  ): Promise<Identite[]> {
    return this.service.identites(args);
  }

  @graphql.Query(() => Identite, { nullable: true })
  async identite(
    @graphql.Args() args: IdentiteFindUniqueArgs
  ): Promise<Identite | null> {
    const result = await this.service.identite(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Identite)
  async createIdentite(
    @graphql.Args() args: CreateIdentiteArgs
  ): Promise<Identite> {
    return await this.service.createIdentite({
      ...args,
      data: {
        ...args.data,

        salarie: {
          connect: args.data.salarie,
        },
      },
    });
  }

  @graphql.Mutation(() => Identite)
  async updateIdentite(
    @graphql.Args() args: UpdateIdentiteArgs
  ): Promise<Identite | null> {
    try {
      return await this.service.updateIdentite({
        ...args,
        data: {
          ...args.data,

          salarie: {
            connect: args.data.salarie,
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

  @graphql.Mutation(() => Identite)
  async deleteIdentite(
    @graphql.Args() args: DeleteIdentiteArgs
  ): Promise<Identite | null> {
    try {
      return await this.service.deleteIdentite(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Salarie, {
    nullable: true,
    name: "salarie",
  })
  async getSalarie(
    @graphql.Parent() parent: Identite
  ): Promise<Salarie | null> {
    const result = await this.service.getSalarie(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
