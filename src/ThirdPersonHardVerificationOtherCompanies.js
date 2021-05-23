import React, { useReducer } from "react";
import AdditionalVerification from './AdditionalIdentyfication'
import ThirdPersonQuestionAboutCase from './ThirdPersonQuestionAboutCase'

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const ThirdPersonHardVerificationOtherCompanies = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }
    return (
        <div>
            <h3>W TAKIM RAZIE BĘDĄ TO WSZELKIE POZOSTAŁE FORMY PRAWNE (SPÓŁKI Z O.O., FUNDACJE, INSTYTUCJA PUBLICZNE ETC.)</h3>
            <h3>PRZEPROWADŹ WERYFIKACJĘ TWARDĄ. CZY KLIENT PODAŁ PRAWIDŁOWE DANE? HASŁO ABONENCIE, KOD PUK?</h3>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (

                <AdditionalVerification />
            ) : (
                <ThirdPersonQuestionAboutCase />
            )}
        </div>
    )
}

export default ThirdPersonHardVerificationOtherCompanies
