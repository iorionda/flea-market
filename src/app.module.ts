import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [],
  providers: [],
  // exports: [],外部モジュールにエクスポートとしたい時に利用する
})
export class AppModule {}
