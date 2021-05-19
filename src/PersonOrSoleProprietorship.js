import React, { useReducer } from "react";
import HardVerification from './HardVerification'
import HardVerificationBusiness from './HardVerificationBusiness'


function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const PersonOrSoleProprietorship = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }

    return (
        <>
            <h3>CZY JEST TO OSOBA FIZYCZNA ALBO JEDNOSOSOBOWA DZIAŁALNOŚĆ GOSPODARCZA?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <>
                    <HardVerification />
                </>
            ) : (
                <HardVerificationBusiness />
            )}
        </>
    )
}

export default PersonOrSoleProprietorship
