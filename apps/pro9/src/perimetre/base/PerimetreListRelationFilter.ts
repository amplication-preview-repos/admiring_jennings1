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
import { PerimetreWhereInput } from "./PerimetreWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PerimetreListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PerimetreWhereInput,
  })
  @ValidateNested()
  @Type(() => PerimetreWhereInput)
  @IsOptional()
  @Field(() => PerimetreWhereInput, {
    nullable: true,
  })
  every?: PerimetreWhereInput;

  @ApiProperty({
    required: false,
    type: () => PerimetreWhereInput,
  })
  @ValidateNested()
  @Type(() => PerimetreWhereInput)
  @IsOptional()
  @Field(() => PerimetreWhereInput, {
    nullable: true,
  })
  some?: PerimetreWhereInput;

  @ApiProperty({
    required: false,
    type: () => PerimetreWhereInput,
  })
  @ValidateNested()
  @Type(() => PerimetreWhereInput)
  @IsOptional()
  @Field(() => PerimetreWhereInput, {
    nullable: true,
  })
  none?: PerimetreWhereInput;
}
export { PerimetreListRelationFilter as PerimetreListRelationFilter };
