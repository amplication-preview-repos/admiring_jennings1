/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AdresseService } from "../adresse.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AdresseCreateInput } from "./AdresseCreateInput";
import { Adresse } from "./Adresse";
import { AdresseFindManyArgs } from "./AdresseFindManyArgs";
import { AdresseWhereUniqueInput } from "./AdresseWhereUniqueInput";
import { AdresseUpdateInput } from "./AdresseUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AdresseControllerBase {
  constructor(
    protected readonly service: AdresseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Adresse })
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAdresse(
    @common.Body() data: AdresseCreateInput
  ): Promise<Adresse> {
    return await this.service.createAdresse({
      data: {
        ...data,

        demanagementSalaries: data.demanagementSalaries
          ? {
              connect: data.demanagementSalaries,
            }
          : undefined,

        DomiciliationSalarie: data.DomiciliationSalarie
          ? {
              connect: data.DomiciliationSalarie,
            }
          : undefined,

        informationPostale: {
          connect: data.informationPostale,
        },
      },
      select: {
        createdAt: true,
        debutValidite: true,

        demanagementSalaries: {
          select: {
            id: true,
          },
        },

        DomiciliationSalarie: {
          select: {
            id: true,
          },
        },

        finValidite: true,
        id: true,

        informationPostale: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Adresse] })
  @ApiNestedQuery(AdresseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async adresses(@common.Req() request: Request): Promise<Adresse[]> {
    const args = plainToClass(AdresseFindManyArgs, request.query);
    return this.service.adresses({
      ...args,
      select: {
        createdAt: true,
        debutValidite: true,

        demanagementSalaries: {
          select: {
            id: true,
          },
        },

        DomiciliationSalarie: {
          select: {
            id: true,
          },
        },

        finValidite: true,
        id: true,

        informationPostale: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Adresse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async adresse(
    @common.Param() params: AdresseWhereUniqueInput
  ): Promise<Adresse | null> {
    const result = await this.service.adresse({
      where: params,
      select: {
        createdAt: true,
        debutValidite: true,

        demanagementSalaries: {
          select: {
            id: true,
          },
        },

        DomiciliationSalarie: {
          select: {
            id: true,
          },
        },

        finValidite: true,
        id: true,

        informationPostale: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Adresse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAdresse(
    @common.Param() params: AdresseWhereUniqueInput,
    @common.Body() data: AdresseUpdateInput
  ): Promise<Adresse | null> {
    try {
      return await this.service.updateAdresse({
        where: params,
        data: {
          ...data,

          demanagementSalaries: data.demanagementSalaries
            ? {
                connect: data.demanagementSalaries,
              }
            : undefined,

          DomiciliationSalarie: data.DomiciliationSalarie
            ? {
                connect: data.DomiciliationSalarie,
              }
            : undefined,

          informationPostale: {
            connect: data.informationPostale,
          },
        },
        select: {
          createdAt: true,
          debutValidite: true,

          demanagementSalaries: {
            select: {
              id: true,
            },
          },

          DomiciliationSalarie: {
            select: {
              id: true,
            },
          },

          finValidite: true,
          id: true,

          informationPostale: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Adresse })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Adresse",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAdresse(
    @common.Param() params: AdresseWhereUniqueInput
  ): Promise<Adresse | null> {
    try {
      return await this.service.deleteAdresse({
        where: params,
        select: {
          createdAt: true,
          debutValidite: true,

          demanagementSalaries: {
            select: {
              id: true,
            },
          },

          DomiciliationSalarie: {
            select: {
              id: true,
            },
          },

          finValidite: true,
          id: true,

          informationPostale: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
