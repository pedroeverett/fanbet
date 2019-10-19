import React from 'react';
import { shallow } from 'enzyme';
import PlayerContainer from './PlayerContainer';

describe('PlayerContainer', () => {
    const playerMoch = {"first_name": "Stephen",
        "fixture": {
            "_members": ["112160"],
            "_ref": "fixtures.id"
        },
        "fppg": 47.94303797468354,
        "id": "15475-9524",
        "images": {
            "default": {
                "height": 200,
                "url": "https://d17odppiik753x.cloudfront.net/playerimages/nba/9524.png",
                "width": 200
            }
        },
        "injured": false,
        "injury_details": "knee",
        "injury_status": "o",
        "last_name": "Curry",
        "news": {
            "latest": "2016-05-02T18:35:15Z"
        },
        "played": 79,
        "player_card_url": "https://www.fanduel.com/e/Player/9524/Stats/15475",
        "position": "PG",
        "removed": false,
        "salary": 10600,
        "starting_order": null,
        "team": {
            "_members": ["687"],
            "_ref": "teams.id"
        }
    }
    const component = shallow(<PlayerContainer player={playerMoch} />);
    it('should render correctly', () => {
        expect(component).toMatchSnapshot();
    });

//   it('should get props correctly', () => {
//     expect(player.first_name).toBe('pedro');
//   });

//   it('should contain 1 div element', () => {
//     expect(component.find('div').length).toBe(1);
//   })

});
