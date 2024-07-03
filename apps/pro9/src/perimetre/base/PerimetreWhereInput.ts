/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StructureWhereUniqueInput } from "../../structure/base/StructureWhereUniqueInput";
import { UtilisateurListRelationFilter } from "../../utilisateur/base/UtilisateurListRelationFilter";

@InputType()
class PerimetreWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => StructureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StructureWhereUniqueInput)
  @IsOptional()
  @Field(() => StructureWhereUniqueInput, {
    nullable: true,
  })
  structure?: StructureWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UtilisateurListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UtilisateurListRelationFilter)
  @IsOptional()
  @Field(() => UtilisateurListRelationFilter, {
    nullable: true,
  })
  utilisateurs?: UtilisateurListRelationFilter;
}

export { PerimetreWhereInput as PerimetreWhereInput };
