import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  /* app.useStaticAssets(join(__dirname, '...', 'public'), {
    prefix: '/static',
  }); */
  await app.listen(3000);
}
bootstrap();
