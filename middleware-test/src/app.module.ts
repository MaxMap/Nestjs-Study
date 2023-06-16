import { Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MiddlewareBuilder } from '@nestjs/core';
import { AaaMiddleware } from './aaa.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumner: MiddlewareBuilder) {
    // consumner.apply(AaaMiddleware).forRoutes('*');
    consumner
      .apply(AaaMiddleware)
      .forRoutes({ path: 'hello*', method: RequestMethod.GET });

    consumner
      .apply(AaaMiddleware)
      .forRoutes({ path: 'world2', method: RequestMethod.GET });
  }
}
