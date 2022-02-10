import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
    <h1>Type your Name and RoomID(ex. any number) and share the link with the credentials to chat with others <span role="img" aria-label="emoji">❤️</span></h1>

    <h2>Realtime Chat Application<span role="img" aria-label="emoji">⬅️</span></h2>
      
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:<span role="img" aria-label="emoji">💬</span></h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;