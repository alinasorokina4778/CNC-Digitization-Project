import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!requiredRoles) {
      return true; // Если роли не указаны, доступ разрешён
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user; // Получаем пользователя из req.user (уже аутентифицирован)
    
    return requiredRoles.includes(user.role); // Проверяем, есть ли у пользователя нужная роль
  }
}
