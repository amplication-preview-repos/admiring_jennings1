import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PerimetreServiceBase } from "./base/perimetre.service.base";

@Injectable()
export class PerimetreService extends PerimetreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
