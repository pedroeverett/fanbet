import React, { Component } from 'react';
import PlayerContainer from './PlayerContainer';
import ResultModal from './ResultModal';
import { sample, sampleSize, isEmpty } from 'lodash';
import fetch from "node-fetch";
import styled from 'styled-components';
import './styles.global.css';


const PanelWraper = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`;

const Header = styled('div')`
  display: table;
  width: 100%;
  background-color: grey;
  color: white;
  padding-bottom: 20px;
`;

const AppName = styled('h1')`
  display: table-cell;
  text-align: left;
  padding-left: 50px;
`;

const Score = styled('h1')`
  text-align: right;
  width: 1%;
  white-space: nowrap;
`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      randomPlayers: [],
      selectedPlayer:{},
      score: 0,
      win: null,
    }
  }

  async componentDidMount() {
    try {
      const resp = await fetch('https://gist.githubusercontent.com/liamjdouglas/bb40ee8721f1a9313c22c6ea0851a105/raw/6b6fc89d55ebe4d9b05c1469349af33651d7e7f1/Player.json')
      const data = await resp.json()
      this.setState({
            players: data.players,
            randomPlayers: sampleSize(data.players, 2),
      })
    } catch (e) {
      console.log(e)
    }
  }

  getRandomMessage(win) {
    const winMessages = [
      'Great, you have won this round.',
      'Congrats you are the man!! Keep playing',
      'Damm, you are the winner'
    ]
    const looseMessages = [
      'Oopss, you lost. Better luck next time',
      'You lost!! I can see you need to read about your players.. Better luck next time',
      'You lost. Dont dispair, try again'
    ]
    if (win) {
      return sample(winMessages)
    } else {
      return sample(looseMessages)
    }
  }

  getSecondPlayer(player, randomPlayers) {
    let secondPlayer = {};
    randomPlayers.forEach( randomPlayer => {
      if (JSON.stringify(randomPlayer) !== JSON.stringify(player))
      secondPlayer = randomPlayer;
    });
    return secondPlayer;
  }

  checkBestPlayer(player, secondPlayer) {
      if (player.fppg > secondPlayer.fppg) {
        const newScore = this.addScore()
        this.setState({
          win: true,
          score: newScore
        });
      } else {
        this.setState({
          win: false
        });
      }
  }

  addScore() {
    let score = this.state.score;
    return score += 1;
  }

  setSelectedPlayer(player) {
    this.setState({
      selectedPlayer: player
    });
  }

  setRandomPlayers(players) {
    this.setState({
      randomPlayers: sampleSize(players, 2)
    });
  }

  handleClick(players) {
    this.setRandomPlayers(players);
    this.setSelectedPlayer();
  }

  handleChoosenPlayer(player) {
    this.setSelectedPlayer(player)
    const secondPlayer = this.getSecondPlayer(player, this.state.randomPlayers);
    this.checkBestPlayer(player, secondPlayer);
  }

  restartGame(players) {
    this.setRandomPlayers(players);
    this.setSelectedPlayer();
    this.setState({
      win: null,
      score: 0
    });
  }

  render () {
    const { players, randomPlayers, score, selectedPlayer, win } = this.state;
    const isSelected = isEmpty(selectedPlayer);
    const winner = score === 10;
    return (
      <div className="App-main">
        <Header>
          <AppName>FanBet - Make Your bets</AppName>
          <Score>Your Score: {score}</Score>
        </Header>
        <PanelWraper>
          {randomPlayers.map((player, index) =>
            <PlayerContainer player={player} key={index} onClick={() => this.handleChoosenPlayer(player)}/>
          )}
        </PanelWraper>
        { !isSelected && !winner && <ResultModal
          onClick={() => this.handleClick(players)}
          open={!isSelected}
          fppg={selectedPlayer.fppg}
          message={this.getRandomMessage(win)}
          buttonLabel="Play Again"
        />}
        { winner && <ResultModal
          onClick={() => this.restartGame(players)}
          open={winner}
          fppg={selectedPlayer.fppg}
          message={this.getRandomMessage(win)}
          winMessage="You have done great. Your total score is 10. Go ahead and play again."
          buttonLabel="Restart the game"
        />}
      </div>
    );
  }
}

export default App;