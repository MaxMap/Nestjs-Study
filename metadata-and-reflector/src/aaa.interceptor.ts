import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AaaInterceptor implements NestInterceptor {
  // constructor(private reflector: Reflector) {}
  @Inject(Reflector)
  private reflector: Reflector;

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log('-------------interceptor-------------');
    console.log(this.reflector.get('roles', context.getHandler()));

    console.log(
      'getAll ===>',
      this.reflector.getAll('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    console.log(
      'getAllAndMerge ===>',
      this.reflector.getAllAndMerge('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    console.log(
      'getAllAndOverride ===>',
      this.reflector.getAllAndOverride('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );

    return next.handle();
  }
}
