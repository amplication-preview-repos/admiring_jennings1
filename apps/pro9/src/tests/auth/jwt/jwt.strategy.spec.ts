import { UnauthorizedException } from "@nestjs/common";
import { mock } from "jest-mock-extended";
import { JwtStrategyBase } from "../../../auth/jwt/base/jwt.strategy.base";
import { TEST_USER } from "../constants";
import { UtilisateurService } from "../../../utilisateur/utilisateur.service";
describe("Testing the jwtStrategyBase.validate()", () => {
  const userService = mock<UtilisateurService>();
  const jwtStrategy = new JwtStrategyBase("Secrete", userService);
  beforeEach(() => {
    userService.utilisateur.mockClear();
  });
  it("should throw UnauthorizedException where there is no user", async () => {
    //ARRANGE
    userService.utilisateur
      .calledWith({
        where: { username: TEST_USER.username },
      })
      .mockReturnValue(Promise.resolve(null));
    //ACT
    const result = jwtStrategy.validate({
      id: TEST_USER.id,
      username: TEST_USER.username,
      roles: TEST_USER.roles,
    });
    //ASSERT
    return expect(result).rejects.toThrowError(UnauthorizedException);
  });
});
