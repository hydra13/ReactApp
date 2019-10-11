# ReactInst
<p align="center">
  <img src="https://github.com/hydra13/ReactApp/blob/master/docs/ReactInst.gif?raw=true" width="640" alt="ReactInst Example Gif" />
</p>

Простое приложение для изучения возможностей использования следующих технологий:
-----
- WebPack
- Babel
- Scss
- React

Развертывание:
-----
1) Установить Node.js и MongoDB.
2) Клонировать проект и установить необходимые зависимости:
```
git clone https://github.com/hydra13/ReactInst.git
cd ReactInst
npm i
```
3) Заменить настройки БД (DB_HOST и DB_PORT) в файле:
```
server/.env
```
4) Заполнить БД тестовыми данными запустив скрипт:
```
cd ReactInst/server/seeds/
node index.js
```
5) Взять из БД любую запись пользователя (email и password) для проверки:
```
mongo
use insta
db.users.find()
```
6) Запустить сервер:
```
node server/index.js
```
7) Запустить в другом терминале клиент:
```
npm start
```
