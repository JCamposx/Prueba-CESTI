# Setup

First of all, you have to clone the repo and move into it.

```bash
git clone https://github.com/JCamposx/Prueba-CESTI
cd laravel-react-contacts-app
```

After this, you have to move to backend and frontend directories and install the
dependencies.

## Backend

First, move into the backend directory.

```bash
cd backend
```

You have to create an **.env** file. To do this, copy the **.env.example** file
and rename it.

```bash
cp .env.example .env
```

After that, go into the **.env** file and modify DB variables according to what
you have on your database management system. For example, if you are using
MySQL locally, the database you created for this project is named
***postscrud*** and the credentials are ***admin*** for the username and
***password1234*** for the password, you should modify the variables as follows.

```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=postscrud
DB_USERNAME=admin
DB_PASSWORD=password1234
```

Now, install all dependencies.

```bash
composer install
```

Then, run the next commands to have the laravel project ready.

```bash
php artisan key:generate
php artisan migrate
php artisan passport:install
```

Finally, run the server.

```bash
php artisan serve
```

You will see that the server will be running in `localhost` on port `8000`.

## Frontend

First, open a new terminal and move into frontend directory.

```bash
cd frontend
```

Next, you have to once again create an **.env** file.

```bash
touch .env
```

After this, modify the env variable to be able to connect with the backend API.
If you followed the backend instructions step by step, put the following.

```bash
VITE_API_URL=http://localhost:8000/api
```

Note that the url ends with **api without /**.

First of all, you have to install [yarn](https://www.npmjs.com/package/yarn)
globally.

```bash
npm install -g yarn
```

Then, install all dependencies using yarn.

```bash
yarn install
```

Finally, run the server.

```bash
yarn dev
```

You will see that the server will be running in `localhost` on port `5173`.
