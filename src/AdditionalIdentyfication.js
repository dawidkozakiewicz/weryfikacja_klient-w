import React, { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const AdditionalIdentyfication = () => {
    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }
    return (
        <div>
            <h3>ROZMAWIASZ Z OSOBĄ TRZECIĄ</h3>
            <h3>PRZEPROWADŹ IDENTYFIKACJĘ DODATKOWĄ</h3>
            <h3>WYMAGANA JEDNA POPRAWNA ODPOWIEDŹ NA PYTANIA Z ZESTAWU</h3>
            <h3>MOŻESZ ZADAĆ MAKSYMALNIE 3 PYTANIA:</h3>
            <ul>
                <li>dane dotyczące abonamentu, usługi, płatności</li>
                <li>saldo konta</li>
                <li>wysokość ostatniej faktury</li>
                <li>numer karty sim</li>
            </ul>
            <h3>Czy klient odpowiedział poprawnie?</h3>

            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <div>
                    <h3>IDENTYFIKACJA KLIENTA OGRANICZONA</h3>
                    <h3>MOŻESZ ZREALIZOWAC TYLKO NASTĘPUJĄCE DYSPOZYCJE KLIENTA:</h3>
                    <ul>
                        <li>wyjaśnienie płatności</li>
                        <li>wyjaśnienie problemów technicznych</li>
                        <li>wyłączenie usług premium</li>
                        <li>założenie blokad (premium, kradzież/zagubienie)</li>
                        <li>włączenie/wyłączenie usług promocyjnych</li>
                        <li>podanie informacji o wykorzystanych jedniostach</li>
                    </ul>
                </div>

            ) : (
                <>
                    <h3>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
                </>
            )}
        </div>
    )
}

export default AdditionalIdentyfication
