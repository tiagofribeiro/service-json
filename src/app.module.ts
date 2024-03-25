import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StateModule } from './modules/ibge/state/state.module';
import { CityModule } from './modules/ibge/city/city.module';

@Module({
  imports: [StateModule, CityModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
