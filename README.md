# Efficiency dashboard

## About

I want to: Know how efficient my machine is according to the current temperature and observe the trend on a line graph.
To: Make the most profitable decision according to the information presented in the software.

## Summary

The system must provide the user with a page where it is possible to view the current temperature and efficiency of the machine, as well as a line graph with the history of these two pieces of information.

## Information for calculating machine efficiency

It is possible to observe that the machine works better as the ambient temperature is warmer, and from 32° the machine's efficiency is 100%, and below 21° the machine's efficiency registers the worst efficiency index. , 23%. The efficiency behavior between these two temperatures varies linearly, in a directly proportional way.

## Home page requirements

The system must provide a home page;  
The home page must be updated every 30 seconds;  
Whenever the page loads, the system must write the values ​​to an external database:  
-Date and time;  
-Temperature (°C);  
-Machine efficiency (%);  
Whenever the page loads, the system must update the information on the screen:  
-Date and time of last consultation;  
-Temperature of the last consultation (°C);  
-Efficiency of the machine from the last consultation (%);  
Whenever the page loads, the system must update a line graph with information on the machine's temperature and efficiency over time;  

## Requirements

Querying temperature information must use the REST API;  
The registration of information in the external database must use SQL Queries;  
The page needs to present information coherently to the user;  

## Comments

Any service can be used to check temperature (OpenWeather recommended).

## Execution

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

## Docker

```bash
docker-compose -f docker-compose.yml up
```

Wait some minutes for run with automation.
