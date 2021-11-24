# 💥!Welcome to Gaming Charts Full-stack app!💥
Welcome to my version of the gaming charts app, in this readme, you'll know how to run the app locally, description, tech stack, file structure and the 3rd parties used.

>***NOTE***: For your convenience, a hosted version of the app can be found [here](https://gaming-charts.herokuapp.com/).

## How to start 🚀
After downloading and unzipping the folder repo, please follow these steps 
>***NOTE***: Make sure the internet connection is up before executing the next steps.

1. cd into the gaming-charts folder  
2. open a terminal inside the folder and install all the dependencies by typing **`npm i`**
3. serve the app locally by first serving the backend by executing this script in the terminal **`npm run devServer`**
4. serve the frontend part by executing this script in the terminal **`npm run devFront`**
5. the app should automatically open on your browser if not visit http://localhost:3000/

You can also build the app using **`npm run build`**  and then serve it locally using **`npm start`**

## How to run the tests 🧪

1. cd into the gaming-charts folder  
2. open a terminal inside the folder and install all the dependencies by typing **`npm i`**
3. run the tests using **`npm test`** or **`npm run test`**



## File-Structure 📁
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

## Technologies 👨‍💻

**Language**: Typescript
**Front-End**: React, [Tailwind](https://tailwindcss.com/), [MUI](https://mui.com/)
**Back-End**: Nodejs, Express, MongoDB
**Hosting**: Heroku 
##

>***NOTE***:  the app is connected to an online database by default to avoid errors if MongoDB is not installed on the host PC.
>To change the connection params to connect to localhost, check the instructions inside `config.ts` file inside `./server/src/config/config.ts`, remember to seed the database first.

Thanks you.
Enjoy your day!.

👋 built by: Aboubakr Alaghl
👋 Abobkerelaghel@gmail.com
