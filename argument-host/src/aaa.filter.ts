import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { AaaException } from './AaaException';

@Catch(AaaException)
export class AaaFilter implements ExceptionFilter {
  catch(exception: AaaException, host: ArgumentsHost) {
    console.log('执行了ExceptionFilter');

    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();

      response.status(500).json({
        aaa: exception.aaa,
        bbb: exception.bbb,
      });
    } else if (host.getType() === 'ws') {
    } else if (host.getType() === 'rpc') {
    }
    // exception 异常对象
    // host 是一个 ArgumentsHost 对象。是用于切换 http、ws、rpc 等上下文类型的，可以根据上下文类型取到对应的 argument。
    // console.log('exception:', exception);
    // console.log('------------------');
    // console.log('host:', host);
  }
}
