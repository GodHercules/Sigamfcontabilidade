import { Body, Controller, Get, Module, Post } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

@Controller()
class AppController {
  @Get('health')
  health() {
    return { ok: true, app: 'MF Contabilidade API' };
  }

  @Get('services')
  services() {
    return [
      'Contabilidade Completa',
      'Departamento Pessoal',
      'Fiscal e Tributário',
      'Abertura de Empresas',
      'Consultoria Empresarial',
    ];
  }

  @Post('contact')
  contact(@Body() body: Record<string, string>) {
    return { ok: true, message: 'Contato recebido', data: body };
  }
}

@Module({ controllers: [AppController] })
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(process.env.PORT || 3333);
}

bootstrap();
