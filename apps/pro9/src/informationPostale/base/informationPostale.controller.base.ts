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
import { InformationPostaleService } from "../informationPostale.service";
import { InformationPostaleCreateInput } from "./InformationPostaleCreateInput";
import { InformationPostale } from "./InformationPostale";
import { InformationPostaleFindManyArgs } from "./InformationPostaleFindManyArgs";
import { InformationPostaleWhereUniqueInput } from "./InformationPostaleWhereUniqueInput";
import { InformationPostaleUpdateInput } from "./InformationPostaleUpdateInput";

export class InformationPostaleControllerBase {
  constructor(protected readonly service: InformationPostaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: InformationPostale })
  async createInformationPostale(
    @common.Body() data: InformationPostaleCreateInput
  ): Promise<InformationPostale> {
    return await this.service.createInformationPostale({
      data: {
        ...data,

        adresse: {
          connect: data.adresse,
        },
      },
      select: {
        adresse: {
          select: {
            id: true,
          },
        },

        ancienCogCommune: true,
        cogCommune: true,
        cogPays: true,
        complementAdresseExterieur: true,
        complementAdresseInterieur: true,
        complementVoie: true,
        cpCommune: true,
        createdAt: true,
        id: true,
        libelleCommune: true,
        libellePays: true,
        libelleVoie: true,
        matriculeVoie: true,
        mentionPostal: true,
        numeroVoie: true,
        typeAbregeVoie: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [InformationPostale] })
  @ApiNestedQuery(InformationPostaleFindManyArgs)
  async informationPostales(
    @common.Req() request: Request
  ): Promise<InformationPostale[]> {
    const args = plainToClass(InformationPostaleFindManyArgs, request.query);
    return this.service.informationPostales({
      ...args,
      select: {
        adresse: {
          select: {
            id: true,
          },
        },

        ancienCogCommune: true,
        cogCommune: true,
        cogPays: true,
        complementAdresseExterieur: true,
        complementAdresseInterieur: true,
        complementVoie: true,
        cpCommune: true,
        createdAt: true,
        id: true,
        libelleCommune: true,
        libellePays: true,
        libelleVoie: true,
        matriculeVoie: true,
        mentionPostal: true,
        numeroVoie: true,
        typeAbregeVoie: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: InformationPostale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async informationPostale(
    @common.Param() params: InformationPostaleWhereUniqueInput
  ): Promise<InformationPostale | null> {
    const result = await this.service.informationPostale({
      where: params,
      select: {
        adresse: {
          select: {
            id: true,
          },
        },

        ancienCogCommune: true,
        cogCommune: true,
        cogPays: true,
        complementAdresseExterieur: true,
        complementAdresseInterieur: true,
        complementVoie: true,
        cpCommune: true,
        createdAt: true,
        id: true,
        libelleCommune: true,
        libellePays: true,
        libelleVoie: true,
        matriculeVoie: true,
        mentionPostal: true,
        numeroVoie: true,
        typeAbregeVoie: true,
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
  @swagger.ApiOkResponse({ type: InformationPostale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateInformationPostale(
    @common.Param() params: InformationPostaleWhereUniqueInput,
    @common.Body() data: InformationPostaleUpdateInput
  ): Promise<InformationPostale | null> {
    try {
      return await this.service.updateInformationPostale({
        where: params,
        data: {
          ...data,

          adresse: {
            connect: data.adresse,
          },
        },
        select: {
          adresse: {
            select: {
              id: true,
            },
          },

          ancienCogCommune: true,
          cogCommune: true,
          cogPays: true,
          complementAdresseExterieur: true,
          complementAdresseInterieur: true,
          complementVoie: true,
          cpCommune: true,
          createdAt: true,
          id: true,
          libelleCommune: true,
          libellePays: true,
          libelleVoie: true,
          matriculeVoie: true,
          mentionPostal: true,
          numeroVoie: true,
          typeAbregeVoie: true,
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
  @swagger.ApiOkResponse({ type: InformationPostale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteInformationPostale(
    @common.Param() params: InformationPostaleWhereUniqueInput
  ): Promise<InformationPostale | null> {
    try {
      return await this.service.deleteInformationPostale({
        where: params,
        select: {
          adresse: {
            select: {
              id: true,
            },
          },

          ancienCogCommune: true,
          cogCommune: true,
          cogPays: true,
          complementAdresseExterieur: true,
          complementAdresseInterieur: true,
          complementVoie: true,
          cpCommune: true,
          createdAt: true,
          id: true,
          libelleCommune: true,
          libellePays: true,
          libelleVoie: true,
          matriculeVoie: true,
          mentionPostal: true,
          numeroVoie: true,
          typeAbregeVoie: true,
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
