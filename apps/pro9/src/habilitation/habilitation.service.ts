import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HabilitationServiceBase } from "./base/habilitation.service.base";

@Injectable()
export class HabilitationService extends HabilitationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
