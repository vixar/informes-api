import { Bind, Controller, Get, Logger, Param } from '@nestjs/common';
import { InformeService } from './informe.service';

@Controller('informe')
export class InformeController {

    /**
     *
     */
    constructor(private readonly informeService: InformeService) {
        
    }

    @Get()
    getAll() {
        Logger.log('getting all');
        
        return this.informeService.findAll()
    }

    @Get('/sector/:sectorNumber')
    getList(@Param('sectorNumber')sectorNumber: number) {        
        return this.informeService.findBySectorId(+sectorNumber)
    }
    
    @Get(':id')
    getInformeById(@Param('id') id: string) {
        Logger.log(id);
        
        return this.informeService.findById(id)
    }
}
