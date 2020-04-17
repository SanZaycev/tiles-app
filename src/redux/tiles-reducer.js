const CLICK_START_GAME = "CLICK-START-GAME";
const CLICK_RESTART_GAME = "CLICK-RESTART-GAME";
const CLICK_TILE = "CLICK-TILE";

const initialState = {
    round: 1,
    perRound: 4,
    activeAvtor: 0,
    busy: false,
    tiles: [
        {id: 1, active: 0, closed: 0, round: 2, avtor: 1, name: "Sanny", avatar: "./images/tiles/avatar-1.jpg"},
        {id: 2, active: 0, closed: 0, round: 2, avtor: 1, name: "Sanny", avatar: "./images/tiles/avatar-1.jpg"},
        {id: 3, active: 0, closed: 0, round: 2, avtor: 2, name: "Ivan", avatar: "./images/tiles/avatar-2.jpg"},
        {id: 4, active: 0, closed: 0, round: 2, avtor: 2, name: "Ivan", avatar: "./images/tiles/avatar-2.jpg"},
        {id: 5, active: 0, closed: 0, round: 4, avtor: 3, name: "Antonio", avatar: "./images/tiles/avatar-3.jpg"},
        {id: 6, active: 0, closed: 0, round: 4, avtor: 3, name: "Antonio", avatar: "./images/tiles/avatar-3.jpg"},
        {id: 7, active: 0, closed: 0, round: 4, avtor: 4, name: "Витилио", avatar: "./images/tiles/avatar-4.jpg"},
        {id: 8, active: 0, closed: 0, round: 4, avtor: 4, name: "Витилио", avatar: "./images/tiles/avatar-4.jpg"},
        {id: 9, active: 0, closed: 0, round: 6, avtor: 5, name: "Alissandro", avatar: "./images/tiles/avatar-5.jpg"},
        {id: 10, active: 0, closed: 0, round: 6, avtor: 5, name: "Alissandro", avatar: "./images/tiles/avatar-5.jpg"},
        {id: 11, active: 0, closed: 0, round: 6, avtor: 6, name: "Anna", avatar: "./images/tiles/avatar-6.jpg"},
        {id: 12, active: 0, closed: 0, round: 6, avtor: 6, name: "Anna", avatar: "./images/tiles/avatar-6.jpg"},
        {id: 13, active: 0, closed: 0, round: 8, avtor: 7, name: "Иван", avatar: "./images/tiles/avatar-7.jpg"},
        {id: 14, active: 0, closed: 0, round: 8, avtor: 7, name: "Иван", avatar: "./images/tiles/avatar-7.jpg"},
        {id: 15, active: 0, closed: 0, round: 8, avtor: 8, name: "Алёнка", avatar: "./images/tiles/avatar-8.jpg"},
        {id: 16, active: 0, closed: 0, round: 8, avtor: 8, name: "Алёнка", avatar: "./images/tiles/avatar-8.jpg"},
    ]
};

const tilesReducer = (state= initialState, action) => {
    let stateCopy = {...state};
    stateCopy.tiles = [...state.tiles];
    stateCopy.activeState = [];

    let restartGame = (state) => {
        for (let i = 0; i < state.tiles.length; i++){
            state.tiles[i].active = 0;
            state.tiles[i].closed = 0;
        }
        state.activeAvtor = 0;
        state.busy = false;
    };

    switch (action.type){
        case CLICK_TILE:
            if(stateCopy.busy && stateCopy.activeAvtor !== action.avtor && stateCopy.activeAvtor > 0){
                restartGame(stateCopy);
                stateCopy.round = 0;
                return stateCopy;
            }
            stateCopy.activeState[0] = stateCopy.tiles[action.tile_id - 1];
            stateCopy.tiles[action.tile_id - 1].active = 1;
            let countClosed = 0;

            for (let i = 0; i < stateCopy.tiles.length; i++){
                if(stateCopy.tiles[i].round === action.round){
                    if(stateCopy.tiles[i].closed === 1){ countClosed++; }
                    if(stateCopy.tiles[i].avtor === action.avtor){
                        if(stateCopy.tiles[i].id !== action.tile_id){
                            if(stateCopy.tiles[i].active === 1){
                                stateCopy.activeState[1] = stateCopy.tiles[i];
                            }
                        }
                    }
                    else{ stateCopy.tiles[i].active = 0; }
                }
            }

            if(stateCopy.activeAvtor === action.avtor && stateCopy.activeState.length === 2){
                stateCopy.tiles[stateCopy.activeState[0].id - 1].closed = 1;
                stateCopy.tiles[stateCopy.activeState[1].id - 1].closed = 1;
                countClosed +=2;
                stateCopy.activeAvtor = 0;
                stateCopy.busy = false;
                if(countClosed === stateCopy.perRound){ stateCopy.round++; }
                return stateCopy;
            }

            stateCopy.activeAvtor = action.avtor;
            stateCopy.busy = true;
            return stateCopy;
        case CLICK_START_GAME:
            stateCopy.activeAvtor = 0;
            stateCopy.round++;
            stateCopy.busy = false;
            return stateCopy;
        case CLICK_RESTART_GAME:
            restartGame(stateCopy);
            stateCopy.round = 1;
            return stateCopy;
        default:
            return stateCopy;
    }
};

export const clickStartGameCreator = () => ({type: CLICK_START_GAME});
export const clickRestartGameCreator = () => ({type: CLICK_RESTART_GAME});
export const clickTileCreator = (id, round, avtor) => ({type: CLICK_TILE, tile_id: id, round: round, avtor: avtor});

export default  tilesReducer;