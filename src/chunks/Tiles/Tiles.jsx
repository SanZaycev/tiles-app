import React from 'react';
import './Tiles.css';
import Tile from "./Tile/Tile";

const Tiles = (props) => {
    let state = props.tiles;
    if (props.round > 0 && props.round < 9){
        let tilesList = state.map(t => {
            if(t.round === props.round){
                return <Tile key={t.id} id={t.id} avtor={t.avtor} name={t.name} avatar={t.avatar} clickTile={props.clickTile} closed={t.closed} active={t.active} round={t.round} />
            }
            else{ return ""; }
        });
        if(tilesList.join("") === ""){ return <section className="tiles-container empty"/>  }
        return(
            <section className="tiles-container">
                <ul className="tiles-list">
                    {tilesList}
                </ul>
            </section>
        );
    }
    else { return <section className="tiles-container empty"/> }
};

export default Tiles;
