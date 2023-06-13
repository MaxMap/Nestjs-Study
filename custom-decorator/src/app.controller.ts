import {
  Controller,
  Get,
  SetMetadata,
  UseGuards,
  Headers,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AaaGuard } from './aaa.guard';
import { Aaa } from './aaa.decorator';
import { Bbb } from './bbb.decorator';
import { Ccc } from './ccc.decorator';
import { MyHeaders, MyQuery } from './eee.decorator';
import { Ddd } from './classConfig';

@Ddd('dqq', 'haha')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @SetMetadata('aaa', 'admin')
  @UseGuards(AaaGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('bbb')
  @Aaa('hello')
  @UseGuards(AaaGuard)
  getHello2(): string {
    return this.appService.getHello();
  }

  @Bbb('ccc', '啧啧')
  getHello3(): string {
    return this.appService.getHello();
  }

  @Get('ddd') // c 是返回的参数-呈现在页面上
  getHello4(@Ccc() c) {
    return c;
  }
  @Get('eee') //
  getHello5(@Headers('Accept') Headers1, @MyHeaders('accept') header2) {
    return `${Headers1}<br/>${header2}`;
  }

  @Get('query') //
  getHello6(@Query('aaa') aaa, @MyQuery('bbb') bbb) {
    return `${aaa}<br/>${bbb}`;
  }
}
