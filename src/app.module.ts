import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CofferController } from './coffer/coffer.controller';
import { CofferService } from './coffer/coffer.service';

@Module({
  imports: [],
  controllers: [AppController, CofferController],
  providers: [AppService, CofferService],
})
export class AppModule {}
