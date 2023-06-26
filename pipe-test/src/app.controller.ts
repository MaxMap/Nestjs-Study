import {
  Controller,
  Get,
  Query,
  Param,
  ParseIntPipe,
  HttpStatus,
  HttpException,
  ParseFloatPipe,
  ParseBoolPipe,
  ParseArrayPipe,
  ParseEnumPipe,
  DefaultValuePipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { pipe } from 'rxjs';
import { AaaPipe } from './aaa.pipe';

enum Ggg {
  AAA = '1111',
  BBB = '2222',
  CCC = '3333',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('aa', ParseIntPipe) aa: number): number {
    return aa;
  }

  @Get('aa')
  getaa(
    @Query(
      'aa',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
      }),
    )
    aa: number,
  ): number {
    return aa + 1;
  }

  @Get('bb')
  getbb(
    @Query(
      'aa',
      new ParseIntPipe({
        exceptionFactory: (msg) => {
          console.log(msg);
          throw new HttpException('xxx ' + msg, HttpStatus.NOT_IMPLEMENTED);
        },
      }),
    )
    aa: number,
  ): number {
    return aa + 1;
  }

  @Get('cc')
  getcc(@Query('aa', ParseFloatPipe) aa: number): number {
    return aa + 1;
  }

  @Get('dd')
  getdd(@Query('aa', ParseBoolPipe) aa: boolean): string {
    return typeof aa;
  }

  // /ee?aa=1,2,3,4,5
  @Get('ee')
  getee(
    @Query(
      'aa',
      new ParseArrayPipe({
        items: Number,
      }),
    )
    aa: Array<number>,
  ) {
    return aa.reduce((total, item) => total + item, 0);
  }

  // /ff?aa=1..2..3
  @Get('ff')
  getff(
    @Query(
      'aa',
      new ParseArrayPipe({
        // items: Number,
        separator: '..',
        optional: true,
      }),
    )
    aa: Array<number>,
  ) {
    return aa.reduce((total, item) => total + item, 0);
  }

  @Get('gg/:enum')
  getgg(@Param('enum', new ParseEnumPipe(Ggg)) aa: Ggg) {
    return aa;
  }

  @Get('hh')
  gethh(@Query('hh', new DefaultValuePipe('我是默认值')) dd: string) {
    return dd;
  }

  @Get('nnn/:bbb')
  getnn(
    @Query('aaa', AaaPipe) aaa: string,
    @Param('bbb', AaaPipe) bbb: number,
  ) {
    return aaa + bbb;
  }
}
