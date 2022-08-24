import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { InformeService } from './informe.service';
import { informe } from './interfaces/informe.interface';
import { CreateInformeDto } from './dto/informe.dto';
@Controller('informe')
export class InformeController {

    /**
     *
     */
    constructor(private readonly informeService: InformeService) {}

    @Get()
    getAll() {
        return this.informeService.findAll()
    }

    @Get('/sector/:sectorNumber')
    getList(@Param('sectorNumber', ParseIntPipe) sectorNumber: number) {  
        return this.informeService.findBySectorId(sectorNumber)
    }
                
    @Get(':id')
    getInformeById(@Param('id', ParseUUIDPipe) id: string) {
        return this.informeService.findById(id)
    }

    @Post()
    createInform(@Body() informe: CreateInformeDto) {
        return informe;
    }

    @Patch(':id')
    patchInform(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() informe: informe) {
        return informe;
    }    

    @Delete(':id')
    deleteInform(@Param('id', ParseUUIDPipe) id: string) {
        return {id};
    }


}
