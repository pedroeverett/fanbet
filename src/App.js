import React, { Component } from 'react';
import PlayerContainer from './PlayerContainer';
import { sampleSize } from 'lodash';
import styled from 'styled-components';
import fetch from "node-fetch";
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

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
      randomPlayers: [],
      selectedPlayer:{},
      score: 0,
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

  setSelectedPlayer(player) {
    this.setState({
      selectedPlayer: player
    });
  }

  handleChoosenPlayer(player) {
    this.setSelectedPlayer(player)
  }

  render () {
    const { players, randomPlayers , selectedPlayer} = this.state;
    console.log('selectedPlayer',selectedPlayer);
    return (
      <div className="App-main">
        <Header>
          <AppName>FanBet - Make Your bets</AppName>
        </Header>
        <PanelWraper>
        {randomPlayers.map((player, index) =>
            <PlayerContainer player={player} key={index} onClick={() => this.handleChoosenPlayer(player)}/>
          )}
        </PanelWraper>
      </div>
    );
  }

}

export default App;
