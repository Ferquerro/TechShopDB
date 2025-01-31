
# TechStore – Интернет-магазин смартфонов


Современный одностраничный сайт для продажи смартфонов премиум-класса.


## 🚀 Особенности
- Адаптивный дизайн
- Плавные анимации (AOS.js)
- Динамическая загрузка товаров из PostgreSQL
- Интеграция с Google Forms для отзывов
- Стилизованный скролл-бар

## 📦 Установка и запуск

### Требования
- Node.js v16+
- PostgreSQL v12+
- npm

### 1. Клонирование репозитория
```bash
git clone https://github.com/yourusername/techstore.git
cd techstore
```

### 2. Установка зависимостей
```bash
cd server
npm install
```

### 3. Настройка базы данных
```sql
-- Создание БД
CREATE DATABASE techstore_db;

-- Создание таблицы
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    price INTEGER NOT NULL
);

-- Пример тестовых данных
INSERT INTO products (name, image_url, price) 
VALUES 
    ('Samsung Galaxy S23', '/images/samsung-s23.jpg', 149990),
    ('iPhone 15 Pro', '/images/iphone-15.jpg', 139990);
```

### 4. Конфигурация сервера
Создайте файл `.env` в папке `server`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_NAME=techstore_db
```

### 5. Запуск сервера
```bash
npm run dev
```

### 6. Запуск фронтенда
Откройте файл `public/index.html` через Live Server (VS Code) или любой веб-сервер.


## 📂 Структура проекта
```
TechStoreDB/
├── public/              # Фронтенд
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── server/              # Бэкенд
│   ├── server.js
│   └── package.json
├── images/              # Изображения товаров
├── .gitignore
└── README.md
```

