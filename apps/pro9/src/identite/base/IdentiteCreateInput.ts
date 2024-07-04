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
import {
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
  IsDate,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumIdentiteNationalite } from "./EnumIdentiteNationalite";
import { SalarieWhereUniqueInput } from "../../salarie/base/SalarieWhereUniqueInput";
import { EnumIdentiteSexe } from "./EnumIdentiteSexe";

@InputType()
class IdentiteCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumIdentiteCivilite,
  })
  @IsEnum(EnumIdentiteCivilite)
  @IsOptional()
  @Field(() => EnumIdentiteCivilite, {
    nullable: true,
  })
  civilite?: "Homme" | "Femme" | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  codeLieuNaissance!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  communeDeNaissance!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  dateNaissance!: Date;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  departementDeNaissance?: string | null;

  @ApiProperty({
    required: true,
    enum: EnumIdentiteNationalite,
  })
  @IsEnum(EnumIdentiteNationalite)
  @Field(() => EnumIdentiteNationalite)
  nationalite!: "France" | "Autre";

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  nomNaissance!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  nomUsuel!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  numeroInsee?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(256)
  @Field(() => String)
  paysDeNaissance!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  premierPrenom!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  prenoms!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  prenomUsuel!: string;

  @ApiProperty({
    required: true,
    type: () => SalarieWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalarieWhereUniqueInput)
  @Field(() => SalarieWhereUniqueInput)
  salarie!: SalarieWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumIdentiteSexe,
  })
  @IsEnum(EnumIdentiteSexe)
  @IsOptional()
  @Field(() => EnumIdentiteSexe, {
    nullable: true,
  })
  sexe?: "Feminin" | "Masculin" | null;
}

export { IdentiteCreateInput as IdentiteCreateInput };
