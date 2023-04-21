import { COUNTER_CHANGE, COUNT_INCREASE, COUNT_DECREASE } from "../constants";

const initialState = {
    count: 0,
    changeValue: 1
}

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case COUNTER_CHANGE:
            return {
                ...state,
                changeValue: action.payload,
            };
        case COUNT_INCREASE:
            return {
                ...state,
                count: state.count + parseInt(state.changeValue),
            };
        case COUNT_DECREASE:
            return {
                ...state,
                count: state.count - parseInt(state.changeValue),
            };
        default:
            return state;
    }
}
export default countReducer;