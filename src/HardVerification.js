import React, { useReducer } from "react";
import QuestionAboutCase from './QuestionAboutCase'

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const HardVerification = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }
    return (
        <div>
            <h3>PRZEPROWADŹ WERYFIKACJĘ TWARDĄ. CZY KLIENT PODAŁ PRAWIDŁOWE DANE? HASŁO ABONENCIE, PESEL?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <div>
                    <h3>IDENTYFIKACJA KLIENTA POZYTYWNA. Możesz realizować wszystkie dyspozycje klienta, poza tymi, które wymagają pisma klienta.</h3>
                </div>
            ) : (
                <QuestionAboutCase />
            )}
        </div>
    )
}

export default HardVerification
