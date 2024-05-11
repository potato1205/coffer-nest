import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CofferController } from './coffer/coffer.controller';

@Module({
  imports: [],
  controllers: [AppController, CofferController],
  providers: [AppService],
})
export class AppModule {}
