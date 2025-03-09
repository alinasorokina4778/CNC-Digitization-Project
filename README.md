# Проект для запуска и управления Docker контейнерами

**Описание проекта**: Этот проект представляет собой сервис для управления Docker контейнерами, содержащими API и базы данных. Он изолирует приложение и его зависимости от хостовой системы, обеспечивая стабильную среду для работы. Контейнеры могут быть запущены и настроены для различных целей.

## Инструкции по сборке образа и запуску контейнера

1. Клонируйте репозиторий:
   ```bash
   git clone <ссылка на репозиторий>

2. Перейдите в директорию проекта:
cd /home/alina/new-univ-project/universityproject

3. Построение Docker образа: Для сборки образа используйте следующую команду: docker build -t universityproject-image .

4. Запуск контейнера с использованием Docker Compose:
docker-compose up -d

5. Для остановки и удаления контейнеров используйте:
docker-compose down

## Требования к системе
Docker: версия 20.10 и выше
Операционная система: Linux или macOS
Оперативная память: минимум 4 ГБ
Место на диске: минимум 2 ГБ

## Примеры использования заявленных функций проекта:

- Запуск контейнера: Чтобы запустить контейнеры с помощью Docker Compose, используйте команду: docker-compose up -d

- Просмотр состояния контейнеров: Вы можете проверить состояние контейнеров с помощью: docker-compose ps

## Возможные ошибки и их решение: 

1. Ошибка: Порт уже занят: Если порт, который контейнер пытается использовать, уже занят другим процессом, вам нужно либо остановить тот процесс, либо изменить порт в файле docker-compose.yml.
Чтобы найти процесс, который использует порт, выполните: 
sudo lsof -i :5432

Чтобы остановить сервис, занимающий порт, используйте: 
sudo systemctl stop postgresql

2. Ошибка: Контейнер не запускается: Если контейнер не запускается, проверьте логи с помощью: docker-compose logs
