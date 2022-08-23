import { Injectable, Logger } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { informe } from '../../dist/informe/informe.model';

@Injectable()
export class InformeService {

    private informes: informe[] = [
        {
            id: '99ada5f2-bfcf-416b-8f09-d7aaadf3d313',
            agente: 'Sergio Carlos',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'de481f00-e18e-490c-a4fb-d4990c738eef',
            agente: 'Armando Suero',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41440',
            agente: 'Yinet Suero',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41441',
            agente: 'Sergio Carlos',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41440',
            agente: 'Helsen Olivares',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41442',
            agente: 'Tito Gutierrez',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 6643,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41440',
            agente: 'Fernando Pozo',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41440',
            agente: 'Santo Germán',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41443',
            agente: 'Leumi Garcia',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41440',
            agente: 'Sergio Carlos',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
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
            cantiddadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        },
        {
            id: 'aeafe158-f498-4be1-9d06-831199a41440',
            agente: 'Carolina Herrera',
            cantidadHoras: 24,
            cantidadPublicaciones: 6,
            cantidadCursos: 8,
            cantidadRevisitas: 16,
            cantiddadVideos: 3,
            sector: 5754,
            Fecha: new Date().toLocaleDateString('es-DO')
        }
    ]

    findAll(): informe[] {
        return this.informes;
    }

    findBySectorId(sectorNumber: number): informe[] {
        function filter(obj: informe) {
            Logger.log(sectorNumber)
            Logger.log(obj.sector)
            Logger.log(obj.sector === sectorNumber)
            return obj.sector === sectorNumber
        }
        const result = this.informes.filter(filter)

        return result;
    }

    findById(id: string) {
        return this.informes.find(x => x.id === id)
    }
}
