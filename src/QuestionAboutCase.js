import React, { useReducer, useEffect } from "react";
import DetailedIdentyfication from './DetailedIdentyfication'

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "#28E294", noButtonColor: "white" };
        case "no":
            return { ...state, answer: false, noButtonColor: "#D8524E", yesButtonColor: "white" };
        case "changecolor":
            return { ...state, backgroundColorColor: "transparent" }
    }
}

const QuestionAboutCase = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "white", noButtonColor: "white", backgroundColorColor: "#676767" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }

    function changeColor() {
        dispatch({ type: "changecolor" })
    }

    useEffect(() => {
        setTimeout(() => {
            changeColor()
        }, 1000);

    }, [])
    return (
        <div>

            <h3 style={{ backgroundColor: state.backgroundColorColor }}>CZY SPRAWA KLIENTA DOTYCZY: wyjaśnienia płatności, problemów technicznych, wyłączenia usług premium, założenia blokad premium, kradzieży/zagubienia, włączenia/wyłączenia usług promocyjnych, podania informacji o wykorzystanych jednostkach?</h3>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <DetailedIdentyfication />
            ) : (
                <div>
                    <h3>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
                </div>
            )}

        </div>
    )
}

export default QuestionAboutCase
