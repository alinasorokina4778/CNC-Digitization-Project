import { 
    Body, 
    Controller, 
    Get, 
    Request, 
    UseGuards, 
    Post, 
    HttpCode, 
    HttpStatus 
  } from '@nestjs/common';
  import { AuthService } from './auth.service';
  import { AuthGuard } from '@nestjs/passport'; // Используем стандартный AuthGuard
  import { Request as ExpressRequest } from 'express'; // Импорт Request из Express
  import { RolesGuard } from './roles.guard';
  import { Roles } from './roles.decorator';
  
  @Controller('auth')
  export class AuthController {
    constructor(private authService: AuthService) {}
  
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
  
    @UseGuards(AuthGuard('jwt'), RolesGuard)
    @Roles('admin') // Заменяем кастомный guard на стандартный
    @Get('profile')
    getProfile(@Request() req: ExpressRequest) {
      return req.user;
    }
  }
  