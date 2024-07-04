import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InformationPostaleServiceBase } from "./base/informationPostale.service.base";

@Injectable()
export class InformationPostaleService extends InformationPostaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
