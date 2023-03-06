# Cellular automaton
A website dedicated to cellular automata

## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)

## General info
A website dedicated to cellular automata. Firstly created as a final project for studies in the subject of basic computer science. 

The Moore neighborhood is used in the project.

<img src="https://user-images.githubusercontent.com/54840416/223004859-ddebc387-34c2-46ec-ae8b-ea6b6069d95d.png" width="100" height="100">


![obraz](https://user-images.githubusercontent.com/54840416/223004336-31668e8e-0326-4206-9fe4-ec072cccd78a.png)
![obraz](https://user-images.githubusercontent.com/54840416/223004375-199389f7-ad3e-492b-95be-e2b9c90156b3.png)


## Technologies
* Node.js v16.13.0
* npm v8.1.0
* jQuery v3.4.1

## Setup

To run this project, install it locally in main directory using npm:

```
$ npm install
```
then run using 
```
$ node app.js
 or
$ nodemon app.js
```
By default server starts on port 8000, this can be altered by specifying a parameter:
```
$ PORT=1000 node app.js
```

## Features

### Conway's Game of Life

#### User Menu
* Start
* Stop
* Reset
* Clear
* Save (with name)
* Change speed
* Select rule for Game (default 2 & 3)
* Colourful / White
* Sound on / off
* Border on / off
