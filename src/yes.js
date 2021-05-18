import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const TheSameCustomer = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }




    return (
        <>
            <p>CZY SPRAWA DOTYCZY NUMERU ZREJESTROWNEGO NA TĘ SAMĄ OSOBĘ, CO NUMER Z
                KTÓREGO DZWONI KLIENT?</p>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
        </>
    );
};

export default TheSameCustomer;