/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Affectation } from "../../affectation/base/Affectation";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { Adresse } from "../../adresse/base/Adresse";
import { Identite } from "../../identite/base/Identite";
import { Telecom } from "../../telecom/base/Telecom";

@ObjectType()
class Salarie {
  @ApiProperty({
    required: true,
    type: () => [Affectation],
  })
  @ValidateNested()
  @Type(() => Affectation)
  @IsOptional()
  affectations?: Array<Affectation>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: () => Adresse,
  })
  @ValidateNested()
  @Type(() => Adresse)
  demenegament?: Adresse;

  @ApiProperty({
    required: true,
    type: () => Adresse,
  })
  @ValidateNested()
  @Type(() => Adresse)
  domiciliation?: Adresse;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: () => Identite,
  })
  @ValidateNested()
  @Type(() => Identite)
  identite?: Identite;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  statutAdmr!: boolean;

  @ApiProperty({
    required: true,
    type: Boolean,
  })
  @IsBoolean()
  @Field(() => Boolean)
  statutVip!: boolean;

  @ApiProperty({
    required: false,
    type: () => Telecom,
  })
  @ValidateNested()
  @Type(() => Telecom)
  @IsOptional()
  telecom?: Telecom | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Salarie as Salarie };
