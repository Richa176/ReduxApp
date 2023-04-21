import { COUNTER_CHANGE, COUNT_INCREASE, COUNT_DECREASE } from "../constants";

export const setChangeValueAction = (text) => {
    return {
        type: COUNTER_CHANGE,
        payload: text
    }
}
export const increment = () => {
    return {
        type: COUNT_INCREASE,
    };
};

export const decrement = () => {
    return {
        type: COUNT_DECREASE,
    };
};