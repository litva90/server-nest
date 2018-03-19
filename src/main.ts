import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import { HttpExceptionFilter } from './cats/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  //app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();