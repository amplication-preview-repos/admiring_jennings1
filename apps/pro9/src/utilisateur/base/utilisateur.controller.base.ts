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
import { UtilisateurService } from "../utilisateur.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { UtilisateurCreateInput } from "./UtilisateurCreateInput";
import { Utilisateur } from "./Utilisateur";
import { UtilisateurFindManyArgs } from "./UtilisateurFindManyArgs";
import { UtilisateurWhereUniqueInput } from "./UtilisateurWhereUniqueInput";
import { UtilisateurUpdateInput } from "./UtilisateurUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class UtilisateurControllerBase {
  constructor(
    protected readonly service: UtilisateurService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Utilisateur })
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createUtilisateur(
    @common.Body() data: UtilisateurCreateInput
  ): Promise<Utilisateur> {
    return await this.service.createUtilisateur({
      data: {
        ...data,

        habilitation: data.habilitation
          ? {
              connect: data.habilitation,
            }
          : undefined,
      },
      select: {
        civilite: true,
        createdAt: true,
        dateActivation: true,
        dateDesactivation: true,
        email: true,

        habilitation: {
          select: {
            id: true,
          },
        },

        id: true,
        mssEmail: true,
        nom: true,
        prenom: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Utilisateur] })
  @ApiNestedQuery(UtilisateurFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async utilisateurs(@common.Req() request: Request): Promise<Utilisateur[]> {
    const args = plainToClass(UtilisateurFindManyArgs, request.query);
    return this.service.utilisateurs({
      ...args,
      select: {
        civilite: true,
        createdAt: true,
        dateActivation: true,
        dateDesactivation: true,
        email: true,

        habilitation: {
          select: {
            id: true,
          },
        },

        id: true,
        mssEmail: true,
        nom: true,
        prenom: true,
        roles: true,
        updatedAt: true,
        username: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async utilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Utilisateur | null> {
    const result = await this.service.utilisateur({
      where: params,
      select: {
        civilite: true,
        createdAt: true,
        dateActivation: true,
        dateDesactivation: true,
        email: true,

        habilitation: {
          select: {
            id: true,
          },
        },

        id: true,
        mssEmail: true,
        nom: true,
        prenom: true,
        roles: true,
        updatedAt: true,
        username: true,
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
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateUtilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput,
    @common.Body() data: UtilisateurUpdateInput
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.updateUtilisateur({
        where: params,
        data: {
          ...data,

          habilitation: data.habilitation
            ? {
                connect: data.habilitation,
              }
            : undefined,
        },
        select: {
          civilite: true,
          createdAt: true,
          dateActivation: true,
          dateDesactivation: true,
          email: true,

          habilitation: {
            select: {
              id: true,
            },
          },

          id: true,
          mssEmail: true,
          nom: true,
          prenom: true,
          roles: true,
          updatedAt: true,
          username: true,
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
  @swagger.ApiOkResponse({ type: Utilisateur })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Utilisateur",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteUtilisateur(
    @common.Param() params: UtilisateurWhereUniqueInput
  ): Promise<Utilisateur | null> {
    try {
      return await this.service.deleteUtilisateur({
        where: params,
        select: {
          civilite: true,
          createdAt: true,
          dateActivation: true,
          dateDesactivation: true,
          email: true,

          habilitation: {
            select: {
              id: true,
            },
          },

          id: true,
          mssEmail: true,
          nom: true,
          prenom: true,
          roles: true,
          updatedAt: true,
          username: true,
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
