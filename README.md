# Benchwarmers

## Description
Benchwarmers is an application designed for people who want to play pickup sports in groups but don't have know people to play with. Users can create and join 'games' on the application to play their favorite sports and make new friends in the process. Benchwarmers aims to be a simplistic and modern website that allows users to easily access any game and its information in just a couple of clicks.

Upon logging in, users have access to games. Users can create games, fill in game details (date, location, sport, etc...), and interact with existing games. A Google Maps API will be used to display the location of games, which users can select to view details and join the game.

## Live Link
You can view our website by clicking the following link: https://benchwarmers.onrender.com/

## Technologies Used
Benchwarmers is implemented with a MERN stack and uses a Google Maps API to find and place the location of games.

### Database: MongoDB
A non-relational database that stores data in a document data structure. Data is stored in JSON-like objects with key-value pairs.

### Backend: Node
A JavaScript based runtime environment. Using this environment in our backend allows us to process requests in an asynchronous manner.

### Frontend: React
Used to build user interface and allows for dynamic rendering of the DOM.

### Express
Used to define routes and uses middleware to process requests and formulate responses.

### Games
Users have the ability to join open games created by other users if there is space available. They are able to see all upcoming games when they click on "Join Game" where they will see a list of upcoming games as well as where they are located on the map. Users can also sort through upcoming games via sport or skill level. They also have they option to create their own game to host. In their user profile, they will see a component holding all of their upcoming hosted games where they can also edit, or cancel the games.
![ezgif com-video-to-gif](https://github.com/seanathan3/Benchwarmers/assets/116519976/92f7c276-4216-4a18-b859-9c83b7b891b2)

### Google Maps API
Displays an interactive map and can be customized to hold project data.
One implementation of the Google Maps API was to retrieve a location from users when they create a game. Below is a screenshot of code that allowed us to grab the geolocation of the place they select. Then this information had to be passed up to the parent component, GamesForm, so the submission could be completed with the location of the game.
![Google-Maps-Code-Snippet](https://user-images.githubusercontent.com/121701827/233461863-3475b981-4331-4c06-95fc-fa6ae1cc6ab0.PNG)



