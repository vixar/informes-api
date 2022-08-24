import { IsString, IsNumber } from "class-validator";

export class CreateInformeDto {
    @IsString()
    readonly agente: string;
    @IsNumber()
    readonly cantidadHoras: number;
    @IsNumber()
    readonly cantidadPublicaciones: number;
    @IsNumber()
    readonly cantidadCursos: number;
    @IsNumber()
    readonly cantidadRevisitas: number;
    @IsNumber()
    readonly cantidadVideos: number;
    @IsNumber()
    readonly sector: number;
    @IsString()
    readonly fecha: string;
}