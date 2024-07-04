import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalarieServiceBase } from "./base/salarie.service.base";

@Injectable()
export class SalarieService extends SalarieServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
