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
@graphql.Resolver(() => Salarie)
export class SalarieResolverBase {
  constructor(protected readonly service: SalarieService) {}

  async _salariesMeta(
    @graphql.Args() args: SalarieCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Salarie])
  async salaries(
    @graphql.Args() args: SalarieFindManyArgs
  ): Promise<Salarie[]> {
    return this.service.salaries(args);
  }

  @graphql.Query(() => Salarie, { nullable: true })
  async salarie(
    @graphql.Args() args: SalarieFindUniqueArgs
  ): Promise<Salarie | null> {
    const result = await this.service.salarie(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Salarie)
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

  @graphql.Mutation(() => Salarie)
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

  @graphql.ResolveField(() => Affectation, {
    nullable: true,
    name: "affectations",
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

  @graphql.ResolveField(() => Adresse, {
    nullable: true,
    name: "demenegament",
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

  @graphql.ResolveField(() => Adresse, {
    nullable: true,
    name: "domiciliation",
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

  @graphql.ResolveField(() => Identite, {
    nullable: true,
    name: "identite",
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

  @graphql.ResolveField(() => Telecom, {
    nullable: true,
    name: "telecom",
  })
  async getTelecom(@graphql.Parent() parent: Salarie): Promise<Telecom | null> {
    const result = await this.service.getTelecom(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
