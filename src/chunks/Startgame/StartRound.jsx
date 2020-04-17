import React from 'react';
import './StartRound.css';
import {NavLink} from "react-router-dom";

const StartRound = (props) => {
    let onClickStartGame = () => { props.startGame(); };
    let onClickRestartGame = () => { props.restartGame(); };
    let round = 0;
    let gameOver = <section className="nav-container"><ul className="nav-list"><li className="start-box"><NavLink onClick={onClickStartGame} to="/tiles" className="start-game">Начать заново</NavLink></li></ul><div className="finished-image-box"><img src="./gameover.png" alt="Game Over"/></div></section>;
    let nextStep = <section className="nav-container"><ul className="nav-list"><li className="start-box"><NavLink onClick={onClickStartGame} to="/tiles" className="start-game">Нажми меня</NavLink></li></ul><div className="finished-image-box"><img src="./next-step.jpg" alt="Next Step"/></div></section>;
    let finishStep = <section className="nav-container"><ul className="nav-list"><li className="start-box"><NavLink onClick={onClickRestartGame} to="./" className="start-game">Ура! Игра закончена!</NavLink></li></ul><div className="finished-image-box"><img src="./finished.jpg" alt="Finished"/></div></section>;

    switch(props.round){
        case 0: return gameOver;
        case 1: return nextStep;
        case 2:
            round=1;
            return <section className="nav-container"><ul className="nav-list"><li className="step-box">Шаг {round} из 4</li></ul></section>;
        case 3: return nextStep;
        case 4:
            round=2;
            return <section className="nav-container"><ul className="nav-list"><li className="step-box">Шаг {round} из 4</li></ul></section>;
        case 5: return nextStep;
        case 6:
            round=3;
            return <section className="nav-container"><ul className="nav-list"><li className="step-box">Шаг {round} из 4</li></ul></section>;
        case 7: return nextStep;
        case 8:
            round=4;
            return <section className="nav-container"><ul className="nav-list"><li className="step-box">Шаг {round} из 4</li></ul></section>;
        case 9: return finishStep;
        default: return '';
    }
};

export default StartRound;
