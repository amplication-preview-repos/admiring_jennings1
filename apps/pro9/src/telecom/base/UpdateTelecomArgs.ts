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
import { TelecomWhereUniqueInput } from "./TelecomWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { TelecomUpdateInput } from "./TelecomUpdateInput";

@ArgsType()
class UpdateTelecomArgs {
  @ApiProperty({
    required: true,
    type: () => TelecomWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TelecomWhereUniqueInput)
  @Field(() => TelecomWhereUniqueInput, { nullable: false })
  where!: TelecomWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => TelecomUpdateInput,
  })
  @ValidateNested()
  @Type(() => TelecomUpdateInput)
  @Field(() => TelecomUpdateInput, { nullable: false })
  data!: TelecomUpdateInput;
}

export { UpdateTelecomArgs as UpdateTelecomArgs };
