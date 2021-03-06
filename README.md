# π₯Welcomeπ₯

This here is an architecture that you can follow to build scalable full-stack apps that uses React in the front end and Express in the backend to serve the front end and to act as an API.
Everything that is related to the express server is located in the server folder.
Front end code is located in the /src folder.

the project is an extension of react-create-app.
inspired by [β€οΈbulletproof architectureβ€οΈ](https://github.com/santiq/bulletproof-nodejs)

## How to start π

>***NOTE***: Make sure the internet connection is up before executing the next steps.

1. open a terminal inside the folder and install all the dependencies by typing **`npm i`**
2. serve the app locally by first serving the backend by executing this script in the terminal **`npm run devServer`**
3. serve the frontend part by executing this script in the terminal **`npm run devFront`**
4. the app should automatically open on your browser if not visit http://localhost:3000/

You can also build the app using **`npm run build`**  and then serve it locally using **`npm start`**

## How to run the tests π§ͺ

1. cd into the gaming-charts folder  
2. open a terminal inside the folder and install all the dependencies by typing **`npm i`**
3. run the tests using **`npm test`** or **`npm run test`**


## File-Structure π
```
.
βββ build -> ***built version of the frontend***
βββ public-> ***frontend public folder***
βββ server  -> ***server folder***
β   βββ src -> ***source code for the backend***
β   βββ dist-> ***built version of the backend (converted from typescript to javascript)***
β   βββ tests-> ***tests for the controllers***
β   βββ .env.development-> ***env file with development variables***
β   βββ env.example-> ***example env file***
β   βββ env.production-> ***env file with production variables***
βββ src -> ***source code for the frontend***
βββ .gitignore
βββ craco.config.js -> ***config file for*** **C**reate **R**eact **A**pp **C**onfiguration **O**verride
βββ package.json
βββ package-lock.json
βββ README.md
βββ tailwind.config.js  -> ***config file for tailwind CSS framework***
βββ tsconfig.json
```
