import React from 'react';
import './Tile.css';

const Tile = (props) => {
    let avatar = {backgroundImage: 'url(' + props.avatar + ')'};
    let tileClass = 'tile';

    let onClickTile = () => {
        props.clickTile(props.id, props.round, props.avtor);
    };
    if (props.closed === 1){ tileClass += " closed"; }
    if (props.active === 1){ tileClass += " fliped"; }
    return (
        <li onClick={onClickTile} data-id={props.id} data-active={props.active} data-closed={props.closed} className={tileClass}>
            <div style={avatar} className="tile-image"><h2 className="tile-avtor">{props.name}</h2></div>
            <div className="mask"><div className="mask-text">Flip me</div></div>
        </li>
    );
};

export default Tile;