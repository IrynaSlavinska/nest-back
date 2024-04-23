import { Module } from '@nestjs/common';
import { CatsController } from './app.controller';

@Module({
  controllers: [CatsController]
})
export class CatsModule {}
