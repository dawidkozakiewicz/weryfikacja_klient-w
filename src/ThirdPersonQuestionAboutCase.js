import React, { useReducer } from "react";
import ThirdPersonDetailedIdentyfication from './ThirdPersonDetailedIdentyfication'


function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const ThirdPersonQuestionAboutCase = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }
    return (
        <div>

            <h3>CZY SPRAWA KLIENTA DOTYCZY: wyjaśnienia płatności, problemów technicznych, wyłączenia usług premium, założenia blokad premium, kradzieży/zagubienia, włączenia/wyłączenia usług promocyjnych, podania informacji o wykorzystanych jednostkach?</h3>
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <ThirdPersonDetailedIdentyfication />
            ) : (
                <div>
                    <h3>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
                </div>
            )}

        </div>
    )
}

export default ThirdPersonQuestionAboutCase
