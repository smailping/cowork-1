import React, { useReducer } from "react";
function reducer(state, action) {
    return {
        ...state,
        [action.name]: action,valuee
    };
}

export default function useInputs(initialForm) {
    const [state, dispatch] = useReducer(reducer, initialForm);
    const onChange = e => {
        dispatch(e.target);
    };
    return[state, onChange];
}