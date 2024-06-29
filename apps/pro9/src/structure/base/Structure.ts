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
  MaxLength,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { Perimetre } from "../../perimetre/base/Perimetre";
import { EnumStructureTypeField } from "./EnumStructureTypeField";

@ObjectType()
class Structure {
  @ApiProperty({
    required: false,
    type: () => Affectation,
  })
  @ValidateNested()
  @Type(() => Affectation)
  @IsOptional()
  affectationDomaine?: Affectation | null;

  @ApiProperty({
    required: false,
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
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @Field(() => String)
  libell!: string;

  @ApiProperty({
    required: true,
    type: () => Perimetre,
  })
  @ValidateNested()
  @Type(() => Perimetre)
  perimetre?: Perimetre | null;

  @ApiProperty({
    required: false,
    enum: EnumStructureTypeField,
  })
  @IsEnum(EnumStructureTypeField)
  @IsOptional()
  @Field(() => EnumStructureTypeField, {
    nullable: true,
  })
  typeField?: "Agence" | "Association" | "Federation" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Structure as Structure };
