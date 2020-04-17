import {connect} from "react-redux";
import StartRound from "./StartRound";
import {clickStartGameCreator, clickRestartGameCreator} from "../../redux/tiles-reducer";

let mapStateToProps = (state) => {
    return{ round: state.tilesPage.round }
};
let mapDispatchToProps = (dispatch) => {
    return {
        startGame: () => {
            dispatch(clickStartGameCreator());
        },
        restartGame: () => {
            dispatch(clickRestartGameCreator());
        }
    }
};

const StartRoundContainer = connect(mapStateToProps, mapDispatchToProps)(StartRound);

export default StartRoundContainer;