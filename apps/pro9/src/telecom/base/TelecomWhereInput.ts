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
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { SalarieWhereUniqueInput } from "../../salarie/base/SalarieWhereUniqueInput";
import { Salarie } from "../../salarie/base/Salarie";
import { EnumTelecomTypeMoyen } from "./EnumTelecomTypeMoyen";
import { JsonFilter } from "../../util/JsonFilter";

@InputType()
class TelecomWhereInput {
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
    type: () => SalarieWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalarieWhereUniqueInput)
  @IsOptional()
  @Field(() => SalarieWhereUniqueInput, {
    nullable: true,
  })
  Salarie?: SalarieWhereUniqueInput;

  @ApiProperty({
    required: false,
    enum: EnumTelecomTypeMoyen,
  })
  @IsEnum(EnumTelecomTypeMoyen)
  @IsOptional()
  @Field(() => EnumTelecomTypeMoyen, {
    nullable: true,
  })
  typeMoyen?: "Option1";

  @ApiProperty({
    required: false,
    type: JsonFilter,
  })
  @Type(() => JsonFilter)
  @IsOptional()
  @Field(() => JsonFilter, {
    nullable: true,
  })
  valeurMoyen?: JsonFilter;
}

export { TelecomWhereInput as TelecomWhereInput };
