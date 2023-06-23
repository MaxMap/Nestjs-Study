import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { AaaInterceptor } from './aaa.interceptor';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';
import { CatchErrorTestInterceptor } from './catch-error-test.interceptor';
import { TimeoutInterceptor } from './timeout.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(AaaInterceptor)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('map')
  @UseInterceptors(MapTestInterceptor)
  getMap(): string {
    return 'map';
  }

  @Get('logger')
  @UseInterceptors(TapTestInterceptor)
  getLogger(): string {
    return 'logger';
  }

  @Get('error')
  @UseInterceptors(CatchErrorTestInterceptor)
  getError(): string {
    throw new Error('xx');
    return 'error';
  }

  @Get('errorTime')
  @UseInterceptors(TimeoutInterceptor)
  async errorTime() {
    await new Promise((resolve) => setTimeout(resolve, 4000));
    return 'error';
  }

  @Get('eee')
  getE(): string {
    return 'eeee';
  }
}
