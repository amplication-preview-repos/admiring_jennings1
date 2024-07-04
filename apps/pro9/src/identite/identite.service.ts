import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { IdentiteServiceBase } from "./base/identite.service.base";

@Injectable()
export class IdentiteService extends IdentiteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
