import {connect} from "react-redux";
import Tiles from "./Tiles";
import {clickTileCreator} from "../../redux/tiles-reducer";

let mapStateToProps = (state) => {
    return{ tiles: state.tilesPage.tiles, round: state.tilesPage.round }
};
let mapDispatchToProps = (dispatch) => {
    return {
        clickTile: (id, round, avtor) => {
            dispatch(clickTileCreator(id, round, avtor));
        }
    }
};

const TilesContainer = connect(mapStateToProps, mapDispatchToProps)(Tiles);

export default TilesContainer;