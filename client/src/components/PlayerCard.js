import React from 'react';
import { GoDark } from '../hooks/GoDark';

export const PlayerCard = (props) => {
    const [darkMode, setDarkMode]  = GoDark();
    return (
        <div data-testid="players" className={`players ${darkMode ? 'dark' : ''}`}>
            <button className={`${darkMode ? 'dark' : ''}`} data-testid="button" onClick={setDarkMode} >Switch Theme</button>
            {props.data.map(player => {
                return (
                    <div className="player">
                        <h1>{player.name}</h1>
                        <p>{player.country}</p>
                        <p>{player.searches}</p>
                    </div>
                )
            })}
        </div>
    )
}