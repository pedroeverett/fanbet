import React from 'react';
import styled from 'styled-components';

const PlayerWraper = styled('div')`
  text-align: center;
  display: inline-block;
  width: 200px;
`;

const PlayerName = styled('h4')`
  padding-bottom: 20px;
`;

const Image = styled('img')`
  height: 200px;
  width: 200px;
`;

const PlayerContainer = ({ player }) => {
    console.log(player);
  return (
    <PlayerWraper>
        <div>
          <Image src={player.images.default.url} alt={player.first_name} />
          <PlayerName>Name: {player.first_name} {player.last_name}</PlayerName>
        </div>
    </PlayerWraper>
  );
};

export default PlayerContainer;