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
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { PerimetreWhereUniqueInput } from "../../perimetre/base/PerimetreWhereUniqueInput";
import { UtilisateurWhereUniqueInput } from "../../utilisateur/base/UtilisateurWhereUniqueInput";

@InputType()
class HabilitationWhereInput {
  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  gestionAdministration?: BooleanNullableFilter;

  @ApiProperty({
    required: false,
    type: BooleanNullableFilter,
  })
  @Type(() => BooleanNullableFilter)
  @IsOptional()
  @Field(() => BooleanNullableFilter, {
    nullable: true,
  })
  gestionUtilisateur?: BooleanNullableFilter;

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
    type: () => PerimetreWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PerimetreWhereUniqueInput)
  @IsOptional()
  @Field(() => PerimetreWhereUniqueInput, {
    nullable: true,
  })
  perimetre?: PerimetreWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => UtilisateurWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UtilisateurWhereUniqueInput)
  @IsOptional()
  @Field(() => UtilisateurWhereUniqueInput, {
    nullable: true,
  })
  utilisateur?: UtilisateurWhereUniqueInput;
}

export { HabilitationWhereInput as HabilitationWhereInput };
