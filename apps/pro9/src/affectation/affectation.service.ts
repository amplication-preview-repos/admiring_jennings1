import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AffectationServiceBase } from "./base/affectation.service.base";

@Injectable()
export class AffectationService extends AffectationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
