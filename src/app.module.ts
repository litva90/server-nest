import { Module, MiddlewaresConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { loggerMiddleware } from './common/middlewares/logget.middleware';
import { CatsController } from './cats/cats.controller';

@Module({
  imports: [CatsModule],
  controllers: [],
  components: [],
})
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply(loggerMiddleware).with('ApplicationModule').forRoutes(CatsController);
  }
}