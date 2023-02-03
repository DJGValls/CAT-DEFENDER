# CAT DEFENDER

## Description

CAT DEFENDER is a videogame where you can move in all directions, shoot down and doge all the enemies. You will be in a city attacked by an UFO army. Unfortunatelly the only way to shoot down UFO's is with an space ship that only can be drive for cats. The UFO army want abduct people and your mission is aboid it. If the UFO descend to the city and abduct with his "badduction ray" your city will lost population. If your population decens to 0 your space ship will explode. If you crash with the floor or other UFO, your space ship will explode too. You will obtain points of score every time you shoot down a UFO. The difficulty of the game will be incremented step by step. So, good luck!

## Main Functionalities

- game has a space ship that moves in all directions
- space ship shoots up blaster projectiles
- Shoots destroy enemies
- foe1 appears randomly from the corner of the screen, decends to the city, stop, launch a badducition ray and ascens 
- foe2 appears randomly from the rigth
- foe3 appears randomly from the top and decends to the city, stop, launch a badducition ray and ascens
- One point of score by UFO shoot down
- Increasing dificulty every 25 points of score

## Backlog

- Add final monster enemy
- Change scenary for each level with different type of enemies

## Data Structure

# main.js

- startGame () {}
- keyDownHandler () {}
- keyUpHandler () {}

# game.js

- gameOver () {}
- clearCanvas () {}
- drawBg () {}
- moveShip () {}
- hit () {}
- destroyFoe () {}
- checkColissionShipFloor () {}
- checkColissionShipFoe () {}
- checkColissionShotFoe () {}
- spawnCity () {}
- deleteCity () {}
- increaseDifficutlt () {}
- spawnFoe () {}
- deletefoe () {}
- fire () {}
- deleteShot () {}
- gameLoop () {}

# classCity.js 

- drawCity () {}
- moveCity () {}
- drawFirstCity () {}

# classShip.js 

- drawShip () {}
- drawCat () {}
- drawShipCat () {}
- parachuteCat () {}

# classFoe.js 

- drawFoe () {}
- drawAbduction () {}
- abductionSounds () {}
- foe1Move () {}
- foe2Move () {}
- foe3Move () {}

# classShot.js 

- drawShot () {}
- moveShot () {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splash-screen
- my-canvas
- gameover-screen

## Links



### Git
URls for the project repo and deploy
[Link Repo](https://github.com/DJGValls/CAT-DEFENDER)
[Link Deploy](https://djgvalls.github.io/CAT-DEFENDER/)

### Slides
URls for the project presentation (slides)
[Link Slides.com]([Link Slides.com]https://docs.google.com/presentation/d/1ROqEQFwzcysdCsy-dw34df-ix7QA4eDPaldGWDknmos/edit#slide=id.p
)