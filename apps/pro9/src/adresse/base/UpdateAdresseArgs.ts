/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AdresseWhereUniqueInput } from "./AdresseWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AdresseUpdateInput } from "./AdresseUpdateInput";

@ArgsType()
class UpdateAdresseArgs {
  @ApiProperty({
    required: true,
    type: () => AdresseWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AdresseWhereUniqueInput)
  @Field(() => AdresseWhereUniqueInput, { nullable: false })
  where!: AdresseWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AdresseUpdateInput,
  })
  @ValidateNested()
  @Type(() => AdresseUpdateInput)
  @Field(() => AdresseUpdateInput, { nullable: false })
  data!: AdresseUpdateInput;
}

export { UpdateAdresseArgs as UpdateAdresseArgs };
