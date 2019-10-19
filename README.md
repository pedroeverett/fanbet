
## Installation

In the project directory, you can run:

`yarn install`

Will install all dependencies.

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

`npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Running the App

Clicking `Choose Player` in one of the two displayed players, will make you bet on the player you want. After that a modal scheen will come up, showing you the FPPG score of that player, and a message letting you know if you won or not.

Just continue your bets until you reach a score of 10, that will be the end of the game. You can then restart the game and enjoy it again.

## About the Project

This project was build with React and it uses Jest and Enzime to run the unit tests.
I choose the approach of having styled components instead of css modules.
I am using Semantic-UI-React, Loadsh and Styled-Components libraries.
Because of the size of the project, I decided to have the test files in the same folder as the components.


## Possible future technical improvements

In the future I would improve the unit tests, I would also implement using Redux so that I could handle the single state storage and make the components more responsible for what they are doing, instead of most of the logic behing on the App component, as it is now.