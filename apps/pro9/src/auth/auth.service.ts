import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { TokenService } from "./token.service";
import { UtilisateurInfo } from "./UtilisateurInfo";
import { UtilisateurService } from "../utilisateur/utilisateur.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService,
    private readonly utilisateurService: UtilisateurService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UtilisateurInfo | null> {
    const user = await this.utilisateurService.utilisateur({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { id, roles } = user;
      const roleList = roles as string[];
      return { id, username, roles: roleList };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UtilisateurInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    const accessToken = await this.tokenService.createToken({
      id: user.id,
      username,
      password,
    });
    return {
      accessToken,
      ...user,
    };
  }
}
