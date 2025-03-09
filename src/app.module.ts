import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { DashboardModule } from './dashboard/dashboard.module';  // Убедись, что путь правильный
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),  // Подключаем .env
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5432,
      username: process.env.DB_USER || 'univproject',
      password: process.env.DB_PASSWORD || '1234',
      database: process.env.DB_NAME || 'backend',
      entities: [User], // Подключаем сущности
      synchronize: true, // Использовать только в разработке!
    }),
    UserModule,
    DashboardModule,
    AuthModule, // Подключаем модуль дашборда
  ],
})
export class AppModule {}
