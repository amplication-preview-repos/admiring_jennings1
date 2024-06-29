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
import { IdentiteService } from "../identite.service";
import { IdentiteCreateInput } from "./IdentiteCreateInput";
import { Identite } from "./Identite";
import { IdentiteFindManyArgs } from "./IdentiteFindManyArgs";
import { IdentiteWhereUniqueInput } from "./IdentiteWhereUniqueInput";
import { IdentiteUpdateInput } from "./IdentiteUpdateInput";

export class IdentiteControllerBase {
  constructor(protected readonly service: IdentiteService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Identite })
  async createIdentite(
    @common.Body() data: IdentiteCreateInput
  ): Promise<Identite> {
    return await this.service.createIdentite({
      data: {
        ...data,

        salarie: {
          connect: data.salarie,
        },
      },
      select: {
        civilite: true,
        codeLieuNaissance: true,
        communeDeNaissance: true,
        createdAt: true,
        dateNaissance: true,
        departementDeNaissance: true,
        id: true,
        nationalite: true,
        nomNaissance: true,
        nomUsuel: true,
        numeroInsee: true,
        paysDeNaissance: true,
        premierPrenom: true,
        prenoms: true,
        prenomUsuel: true,

        salarie: {
          select: {
            id: true,
          },
        },

        sexe: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Identite] })
  @ApiNestedQuery(IdentiteFindManyArgs)
  async identites(@common.Req() request: Request): Promise<Identite[]> {
    const args = plainToClass(IdentiteFindManyArgs, request.query);
    return this.service.identites({
      ...args,
      select: {
        civilite: true,
        codeLieuNaissance: true,
        communeDeNaissance: true,
        createdAt: true,
        dateNaissance: true,
        departementDeNaissance: true,
        id: true,
        nationalite: true,
        nomNaissance: true,
        nomUsuel: true,
        numeroInsee: true,
        paysDeNaissance: true,
        premierPrenom: true,
        prenoms: true,
        prenomUsuel: true,

        salarie: {
          select: {
            id: true,
          },
        },

        sexe: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Identite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async identite(
    @common.Param() params: IdentiteWhereUniqueInput
  ): Promise<Identite | null> {
    const result = await this.service.identite({
      where: params,
      select: {
        civilite: true,
        codeLieuNaissance: true,
        communeDeNaissance: true,
        createdAt: true,
        dateNaissance: true,
        departementDeNaissance: true,
        id: true,
        nationalite: true,
        nomNaissance: true,
        nomUsuel: true,
        numeroInsee: true,
        paysDeNaissance: true,
        premierPrenom: true,
        prenoms: true,
        prenomUsuel: true,

        salarie: {
          select: {
            id: true,
          },
        },

        sexe: true,
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Identite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateIdentite(
    @common.Param() params: IdentiteWhereUniqueInput,
    @common.Body() data: IdentiteUpdateInput
  ): Promise<Identite | null> {
    try {
      return await this.service.updateIdentite({
        where: params,
        data: {
          ...data,

          salarie: {
            connect: data.salarie,
          },
        },
        select: {
          civilite: true,
          codeLieuNaissance: true,
          communeDeNaissance: true,
          createdAt: true,
          dateNaissance: true,
          departementDeNaissance: true,
          id: true,
          nationalite: true,
          nomNaissance: true,
          nomUsuel: true,
          numeroInsee: true,
          paysDeNaissance: true,
          premierPrenom: true,
          prenoms: true,
          prenomUsuel: true,

          salarie: {
            select: {
              id: true,
            },
          },

          sexe: true,
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
  @swagger.ApiOkResponse({ type: Identite })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteIdentite(
    @common.Param() params: IdentiteWhereUniqueInput
  ): Promise<Identite | null> {
    try {
      return await this.service.deleteIdentite({
        where: params,
        select: {
          civilite: true,
          codeLieuNaissance: true,
          communeDeNaissance: true,
          createdAt: true,
          dateNaissance: true,
          departementDeNaissance: true,
          id: true,
          nationalite: true,
          nomNaissance: true,
          nomUsuel: true,
          numeroInsee: true,
          paysDeNaissance: true,
          premierPrenom: true,
          prenoms: true,
          prenomUsuel: true,

          salarie: {
            select: {
              id: true,
            },
          },

          sexe: true,
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
