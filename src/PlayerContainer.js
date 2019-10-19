import React from 'react';
import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

const PlayerWraper = styled('div')`
  text-align: center;
  display: inline-block;
  width: 250px;
  background-color: gray;
  margin: auto;
  padding: 20px;
  border-radius: 5px;
`;

const PlayerName = styled('h4')`
  padding-bottom: 20px;
  color: white;
`;

const Image = styled('img')`
  height: 200px;
  width: 200px;
  background-color: white;
  border-color: black;
  border-radius: 5px;
`;

const PlayerContainer = ({ player, onClick }) => {
  return (
    <PlayerWraper>
        <div>
          <Image src={player.images.default.url} alt={player.first_name} />
          <PlayerName>Name: {player.first_name} {player.last_name}</PlayerName>
        </div>
        <Button onClick={onClick}>Choose Player</Button>
    </PlayerWraper>
  );
};

export default PlayerContainer;