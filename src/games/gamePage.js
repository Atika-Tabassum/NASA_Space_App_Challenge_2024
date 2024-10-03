import React from "react";
import { Fragment } from "react";
import Header from "../general/Header";
import "./gamePage.css";

const GamePage = () => {
    const games = [
        {
            name: "LUDO",
            link: "ludo"
        },
        {
            name: "MEMORY GAME",
            link: "memory"
        },
        {
            name: "WORDDLE",
            link: "worddle"
        }
    ]
    const gotoGame = (gamelink) => {
        window.location.href = `/sustainify/${gamelink}`;
    }
    return <Fragment>
        <Header />
        <div className="game--container">
            <div className="game--container--header">
                <h1>Games</h1>
            </div>
            <div className="game--container--games">
                {games.map((game, index) => {
                    return <div key={index} className="game--container--games--game" onClick={() => gotoGame(game.link)}>
                        <h2 >{game.name}</h2>
                    </div>
                })}
            </div> 
        </div>
    </Fragment>
}

export default GamePage;
