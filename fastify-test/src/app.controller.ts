import { Controller, Get, Request, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { FastifyReply, FastifyRequest } from 'fastify';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(
    @Request() request: FastifyRequest,
    @Response({ passthrough: true }) reply: FastifyReply,
  ) {
    // return this.appService.getHello();
    reply.header('url', request.url);
    reply.send('hello');
  }
}
