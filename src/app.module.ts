import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformeModule } from './informe/informe.module';

@Module({
  imports: [InformeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
