import React, { Component } from 'react';
import styled from 'styled-components';

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
      players: []
    }
  }

  render () {
    return (
      <div className="App-main">
        <Header>
          <AppName>FanBet - Make Your bets</AppName>
        </Header>
        <PanelWraper>
        </PanelWraper>
      </div>
    );
  }

}

export default App;
