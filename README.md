# Проект для запуска и управления Docker контейнерами

**Описание проекта**: Проект представляет собой сервис для сбора и анализа данных с станков с числовым программным управлением (ЧПУ). Система предназначена для мониторинга состояния оборудования, учёта ошибок, и анализа эффективности использования станков в производственном процессе.

## Инструкции по сборке образа и запуску контейнера

1. Клонируйте репозиторий:
   git clone https://github.com/alinasorokina4778/UniversityProject

   Эта команда скачает все файлы проекта на ваш компьютер.

2. После того как проект скачан, перейдите в директорию, где находятся его файлы. :
   cd /home/alina/new-univ-project/universityproject

   Это переместит вас в нужную папку.
   
3. Теперь нужно создать Docker-образ, который будет содержать все необходимые компоненты для запуска проекта. Для сборки образа используйте следующую команду:
   docker build -t universityproject-image 

   Это создаст образ с названием universityproject-image.
   
4. Чтобы запустить проект, используйте Docker Compose, который автоматически настроит все контейнеры для работы:
   docker-compose up -d

   Если при запуске контейнера появляется ошибка, что вам не хватает прав для выполнения команды, используйте sudo для запуска команды с правами администратора:
   sudo docker-compose up -d
   
5. Когда вы захотите остановить проект, выполните команду:
   docker-compose down

   Это остановит все контейнеры и удалит их, освобождая ресурсы вашего компьютера.

## Требования к системе
Docker: версия 20.10 и выше
Операционная система: Linux или macOS
Оперативная память: минимум 4 ГБ
Место на диске: минимум 2 ГБ

## Примеры использования заявленных функций проекта:

-  Docker Compose — это инструмент, который позволяет запускать несколько контейнеров одновременно, используя один файл с настройками. Он автоматизирует процесс настройки, запуска и управления контейнерами.
  Чтобы запустить контейнеры, выполните следующую команду в терминале:
  docker-compose up -d

  После того как вы введете эту команду, Docker Compose начнёт запускать контейнеры, и все необходимые приложения и сервисы начнут работать в фоновом режиме.
  
- Как проверить состояние контейнеров? Чтобы увидеть текущий статус контейнеров, выполните команду:
  docker-compose ps

  После ввода этой команды, вы увидите список контейнеров с информацией о каждом из них, такой как:
  Имя контейнера: уникальное имя, которое присваивается контейнеру.
  Статус: показывается, работает ли контейнер в данный момент.
  Порты: информация о том, какие порты контейнера связаны с портами на вашем компьютере.


## Возможные ошибки и их решение: 

1. Ошибка: Порт уже занят: Если порт, который контейнер пытается использовать, уже занят другим процессом, вам нужно либо остановить тот процесс, либо изменить порт в файле docker-compose.yml.
Чтобы найти процесс, который использует порт, выполните: 
sudo lsof -i :5432

Чтобы остановить сервис, занимающий порт, используйте: 
sudo systemctl stop postgresql

2. Ошибка: Контейнер не запускается: Если контейнер не запускается, проверьте логи с помощью: docker-compose logs
