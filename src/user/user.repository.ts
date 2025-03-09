import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  find: any;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Теперь правильная зависимость
  ) {}

  // Получить всех пользователей
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  // Получить пользователя по ID
  async findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } }); // Используем where
  }

  // Создать пользователя
  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return this.userRepository.save(user);
  }

  // Обновить пользователя
  async update(id: number, userData: Partial<User>): Promise<User | null> {
    await this.userRepository.update(id, userData);
    return this.findOne(id);
  }

  // Удалить пользователя
  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}






/* import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  // Здесь можно добавить кастомные методы для работы с User
}
 */