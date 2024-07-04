import { Field, ObjectType } from "@nestjs/graphql";
import { Utilisateur } from "../utilisateur/base/Utilisateur";

@ObjectType()
export class UtilisateurInfo implements Partial<Utilisateur> {
  @Field(() => String)
  id!: string;
  @Field(() => String)
  username!: string;
  @Field(() => [String])
  roles!: string[];
  @Field(() => String, { nullable: true })
  accessToken?: string;
}
