import React, { useReducer } from "react";
import PersonOrSoleProprietorship from './PersonOrSoleProprietorship'
import QuestionAboutCase from './QuestionAboutCase'
import ThirdPersonCalls from './ThirdPersonCalls'


function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

export default function OwnerOfTheNumberConfirmed() {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }

    return (

        <>
            <h3>CZY SPRAWA DOTYCZY NUMERU ZREJESTROWNEGO NA TĘ SAMĄ OSOBĘ, CO NUMER Z KTÓREGO DZWONI KLIENT?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <>
                    <PersonOrSoleProprietorship />
                </>
            ) : (
                <>
                    <ThirdPersonCalls />
                </>
            )}
        </>

    );
}
