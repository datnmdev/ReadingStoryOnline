import { Transform } from "class-transformer";
import { IsInt, IsNotEmpty } from "class-validator";

export class GetRatingSummaryDto {
    @Transform(({ value }) => Number(value))
    @IsNotEmpty()
    @IsInt()
    storyId: number
}