import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from '../user/user.service';
import { JwtPayload } from './jwt-payload.interface';  // Интерфейс для полезной нагрузки

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),  // Извлечение JWT из заголовка
      secretOrKey: 'your-secret-key',  // Твой секретный ключ для подписи токена
    });
  }

  // Метод для валидации JWT токена и извлечения пользователя
  async validate(payload: JwtPayload) {
    // Здесь payload.sub — это ID пользователя, который был добавлен в токен
    const user = await this.userService.findOne(String(payload.sub));

    return user;  // Возвращаем пользователя, который будет доступен через req.user
  }
}
