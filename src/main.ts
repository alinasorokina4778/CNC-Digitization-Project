import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включаем глобальную валидацию
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Игнорирует поля, которых нет в DTO
    forbidNonWhitelisted: true, // Ошибка, если переданы лишние поля
    transform: true, // Автоматически приводит входные данные к нужным типам
  }));

  // Конфигурация Swagger
  const config = new DocumentBuilder()
    .setTitle('Станки ЧПУ')
    .setDescription('API for managing users')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);  // API будет доступен по /api

  await app.listen(3000);  // Запуск приложения на порту 3000

  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
