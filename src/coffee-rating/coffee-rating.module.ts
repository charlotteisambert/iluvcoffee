import { Module } from '@nestjs/common';
import { CoffeesModule } from '../coffees/coffees.module';
import { DatabaseModule } from '../database/database.module';
import { CoffeeRatingService } from './coffee-rating.service';

@Module({
  imports: [
    CoffeesModule,
    DatabaseModule.register({
      // 👈 passing in dynamic values
      type: 'postgres',
      host: 'localhost',
      password: 'password',
    }),
  ],
  providers: [CoffeeRatingService],
})
export class CoffeeRatingModule {}
