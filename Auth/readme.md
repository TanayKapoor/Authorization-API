# Authorisation API

NodeJS based API which you can use in your project for authorisation

## Installation

Use the package manager [npm](https://nodejs.org/en/) to install NodeJS and start the server using terminal in root directory:

```bash
npm start
```

## Usage
To use API you have to connect your [MongoDB](https://www.mongodb.com/) Cluster and create token in .env file in root directory. Syntax for .env file:

```
DB_CONNECT = < DATABASE LINK >
TOKEN_SECRET = < Any random string for token > 
```
Default port used for server is 3000. You can change it in:
```bash
./index.js
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
Opensource 
