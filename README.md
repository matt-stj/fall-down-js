# Fall Down

## Description
A JavaScript rendition of the TI-83 calculator game [Falldown](http://tiwizard.com/downloads/fall-down/) with added powerup features.

![Game In Action](http://g.recordit.co/onbODpkJDv.gif)
### Features

* **High Scores:** `localStorage` provides a way to store the high scores and display them to the user after each game. 
* **Powerups:** Collision detection allows the ball to give the appearance of resting on the gate, but it also allows the user to manipulate the game using one of the powerup features. The saw icon cuts the gates in half and the clock icon slows the game down. 
* **Recycled Gates:** Gates are stored in an array. When a gate reaches the top of the canvas, it's redirected to beneath the canvas.
* **Increased Difficulty:** The gates move at a faster speed as the game progresses, making it more difficult to advance.

### How to play

Visit [http://matt-stj.github.io/fall-down-js/](http://matt-stj.github.io/fall-down-js/) to play the game. 

Use the right and left arrow keys to direct the ball. When the ball passes through a gate, you score a point. 

Direct the ball toward the clock to slow down the game. The saw will cut the boards in half -- making it easier for you to advance. If the ball touches the ceiling, the game is over. High scores are displayed on the right and updated at the end of each game. 

### Tools

* Javascript / ES6
* HTML 5 Canvas
* Mocha / Chai
* Imagination


### The Team

#### Matt Stjernholm

<img src="https://avatars3.githubusercontent.com/u/5952473?v=3&s=400" alt="Matt Stjernholm" width=150>

[Portfolio](http://people.turing.io/people/matt_stjernholm) // [Github](https://github.com/matt-stj)

Product Manager turned Programmer. I'm a maker at heart, who found my passion for writing code after wearing many hats on a startup product team. Today, as a full-stack developer, I'm looking to expand my skills at a fast-paced organization that values growth, new ideas, and creativity.

Building API’s, working with Rails, and mastering Javascript frameworks are areas that pique my interest, and I’m always excited by learning new technologies.

#### Emily Dowdle

<img src="https://avatars2.githubusercontent.com/u/12585856?v=3&s=460" alt="Emily Dowdle" width=150>

[Website](http://emilydowdle.com) // [Github](https://github.com/emilydowdle/) // [Email](mailto:emily@emilydowdle.com)

I believe in using TDD to create well-written code that meets the demands of business priorities. I’m passionate about learning and want to join an innovative team.

I'm a former writer and editor. My communication skills make me an asset to any team. I've worked directly with clients as a consultant and know how to jump into any situation and work with a diverse group of individuals.

--- 
### To run locally:

```
npm install
```

To fire up a development server:

```
npm start
```

Once the server is running, you can visit:

* `http://localhost:8080/webpack-dev-server/` to run your application.
* `http://localhost:8080/webpack-dev-server/test.html` to run your test suite in the browser.

To build the static files:

```js
npm run build
```


To run tests in Node:

```js
npm test
```


