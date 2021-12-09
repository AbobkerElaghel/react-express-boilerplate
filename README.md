# 💥Welcome💥

This here is an architecture that you can follow to build scalable full-stack apps that uses React in the front end and Express in the backend to serve the front end and to act as an API.
Everything that is related to the express server is located in the server folder.
Front end code is located in the /src folder.

the project is an extension of react-create-app.
inspired by [❤️bulletproof architecture❤️](https://github.com/santiq/bulletproof-nodejs)

>***NOTE***: For your convenience, a hosted version of the app can be found [here](https://gaming-charts.herokuapp.com/).

## How to start 🚀
>***NOTE***: Make sure the internet connection is up before executing the next steps.

1. open a terminal inside the folder and install all the dependencies by typing **`npm i`**
2. serve the app locally by first serving the backend by executing this script in the terminal **`npm run devServer`**
3. serve the frontend part by executing this script in the terminal **`npm run devFront`**
4. the app should automatically open on your browser if not visit http://localhost:3000/

You can also build the app using **`npm run build`**  and then serve it locally using **`npm start`**

## How to run the tests 🧪

1. cd into the gaming-charts folder  
2. open a terminal inside the folder and install all the dependencies by typing **`npm i`**
3. run the tests using **`npm test`** or **`npm run test`**


## File-Structure 📁
```
.
├── build -> ***built version of the frontend***
├── public-> ***frontend public folder***
├── server  -> ***server folder***
│   ├── src -> ***source code for the backend***
│   ├── dist-> ***built version of the backend (converted from typescript to javascript)***
│   ├── tests-> ***tests for the controllers***
│   ├── .env.development-> ***env file with development variables***
│   ├── env.example-> ***example env file***
│   ├── env.production-> ***env file with production variables***
├── src -> ***source code for the frontend***
├── .gitignore
├── craco.config.js -> ***config file for*** **C**reate **R**eact **A**pp **C**onfiguration **O**verride
├── package.json
├── package-lock.json
├── README.md
├── tailwind.config.js  -> ***config file for tailwind CSS framework***
└── tsconfig.json
```
