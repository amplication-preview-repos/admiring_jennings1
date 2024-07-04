/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  InformationPostale as PrismaInformationPostale,
  Adresse as PrismaAdresse,
} from "@prisma/client";

export class InformationPostaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.InformationPostaleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.informationPostale.count(args);
  }

  async informationPostales(
    args: Prisma.InformationPostaleFindManyArgs
  ): Promise<PrismaInformationPostale[]> {
    return this.prisma.informationPostale.findMany(args);
  }
  async informationPostale(
    args: Prisma.InformationPostaleFindUniqueArgs
  ): Promise<PrismaInformationPostale | null> {
    return this.prisma.informationPostale.findUnique(args);
  }
  async createInformationPostale(
    args: Prisma.InformationPostaleCreateArgs
  ): Promise<PrismaInformationPostale> {
    return this.prisma.informationPostale.create(args);
  }
  async updateInformationPostale(
    args: Prisma.InformationPostaleUpdateArgs
  ): Promise<PrismaInformationPostale> {
    return this.prisma.informationPostale.update(args);
  }
  async deleteInformationPostale(
    args: Prisma.InformationPostaleDeleteArgs
  ): Promise<PrismaInformationPostale> {
    return this.prisma.informationPostale.delete(args);
  }

  async getAdresse(parentId: string): Promise<PrismaAdresse | null> {
    return this.prisma.informationPostale
      .findUnique({
        where: { id: parentId },
      })
      .adresse();
  }
}
