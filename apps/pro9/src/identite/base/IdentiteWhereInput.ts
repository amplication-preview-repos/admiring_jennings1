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
import { EnumIdentiteCivilite } from "./EnumIdentiteCivilite";
import { IsEnum, IsOptional, ValidateNested } from "class-validator";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumIdentiteNationalite } from "./EnumIdentiteNationalite";
import { JsonFilter } from "../../util/JsonFilter";
import { SalarieWhereUniqueInput } from "../../salarie/base/SalarieWhereUniqueInput";
import { EnumIdentiteSexe } from "./EnumIdentiteSexe";

@InputType()
class IdentiteWhereInput {
  @ApiProperty({
    required: false,
    enum: EnumIdentiteCivilite,
  })
  @IsEnum(EnumIdentiteCivilite)
  @IsOptional()
  @Field(() => EnumIdentiteCivilite, {
    nullable: true,
  })
  civilite?: "Homme" | "Femme";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  codeLieuNaissance?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  communeDeNaissance?: StringFilter;

  @ApiProperty({
    required: false,
    type: DateTimeFilter,
  })
  @Type(() => DateTimeFilter)
  @IsOptional()
  @Field(() => DateTimeFilter, {
    nullable: true,
  })
  dateNaissance?: DateTimeFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  departementDeNaissance?: StringNullableFilter;

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
    enum: EnumIdentiteNationalite,
  })
  @IsEnum(EnumIdentiteNationalite)
  @IsOptional()
  @Field(() => EnumIdentiteNationalite, {
    nullable: true,
  })
  nationalite?: "France" | "Autre";

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  nomNaissance?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  nomUsuel?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  numeroInsee?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  paysDeNaissance?: JsonFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  premierPrenom?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  prenoms?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  prenomUsuel?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => SalarieWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalarieWhereUniqueInput)
  @IsOptional()
  @Field(() => SalarieWhereUniqueInput, {
    nullable: true,
  })
  salarie?: SalarieWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumIdentiteSexe,
  })
  @IsEnum(EnumIdentiteSexe)
  @IsOptional()
  @Field(() => EnumIdentiteSexe, {
    nullable: true,
  })
  sexe?: "Feminin" | "Masculin";
}

export { IdentiteWhereInput as IdentiteWhereInput };
