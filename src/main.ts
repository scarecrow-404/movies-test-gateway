import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const defaultOrigin = [`http://localhost:3000`, 'http://192.168.1.109:3000'];

  app.enableCors({ origin: defaultOrigin });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Netflix Clone API')
    .setDescription('The Netflix Clone API description')
    .setVersion('1.0')
    .addTag('movies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
