import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { informe } from './interfaces/informe.interface';
import { v4 as uuid} from "uuid";

@Injectable()
export class InformeService {

    private informes: informe[] = [
        {
            id: uuid(),
            agente: 'Sergio Carlos',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Armando Suero',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Yinet Suero',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Sergio Carlos',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Helsen Olivares',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Tito Gutierrez',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Fernando Pozo',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Santo Germán',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Leumi Garcia',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Sergio Carlos',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41444',
            agente: 'Carlos Ten',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: uuid(),
            agente: 'Carolina Herrera',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantidadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        }
    ]

    findAll(): informe[] {
        return this.informes;
    }

    findBySectorId(sectorNumber: number): informe[] {
        function filter(obj: informe) {
            return obj.sector === sectorNumber
        }
        const result = this.informes.filter(filter)
        if (!result.length) throw new NotFoundException(null, 'los informes del sector no fueron encontrados');
        return result;
    }

    findById(id: string) {
        return this.informes.find(x => x.id === id)
    }
}
