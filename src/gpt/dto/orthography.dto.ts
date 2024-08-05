import { IsInt, isInt, IsOptional, IsString } from "class-validator";



export class OrthographyDto {

    @IsString()
    readonly prompt: string;

    @IsInt()
    @IsOptional()
    readonly maxTokens?: string;
}
