import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TelecomServiceBase } from "./base/telecom.service.base";

@Injectable()
export class TelecomService extends TelecomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
