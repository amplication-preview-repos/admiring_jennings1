import { Inject, Injectable } from "@nestjs/common";
import { JWT_SECRET_KEY_PROVIDER_NAME } from "../../constants";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { UtilisateurService } from "../../utilisateur/utilisateur.service";

@Injectable()
export class JwtStrategy extends JwtStrategyBase {
  constructor(
    @Inject(JWT_SECRET_KEY_PROVIDER_NAME) secretOrKey: string,
    protected readonly utilisateurService: UtilisateurService
  ) {
    super(secretOrKey, utilisateurService);
  }
}
