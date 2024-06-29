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
import { EnumAffectationActivite } from "./EnumAffectationActivite";
import { IsEnum, ValidateNested, IsOptional } from "class-validator";
import { StructureWhereUniqueInput } from "../../structure/base/StructureWhereUniqueInput";
import { Type } from "class-transformer";
import { SalarieWhereUniqueInput } from "../../salarie/base/SalarieWhereUniqueInput";

@InputType()
class AffectationCreateInput {
  @ApiProperty({
    required: true,
    enum: EnumAffectationActivite,
  })
  @IsEnum(EnumAffectationActivite)
  @Field(() => EnumAffectationActivite)
  activite!: "Domicile" | "Soin" | "Repas";

  @ApiProperty({
    required: true,
    type: () => StructureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StructureWhereUniqueInput)
  @Field(() => StructureWhereUniqueInput)
  domaine!: StructureWhereUniqueInput;

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
  salarie?: SalarieWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: () => StructureWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StructureWhereUniqueInput)
  @Field(() => StructureWhereUniqueInput)
  structure!: StructureWhereUniqueInput;
}

export { AffectationCreateInput as AffectationCreateInput };
