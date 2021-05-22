import React, { useReducer, useEffect } from "react";


import OwnerOfTheNumberConfirmed from './OwnerOfTheNumberConfirmed'

function reducer(state, action) {
  switch (action.type) {
    case "yes":
      return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "white" };
    case "no":
      return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "white" };
    case "changecolor":
      return { ...state, textColor: "aliceblue" }
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "white", noButtonColor: "white", textColor: "#a7cff2" });

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



  function handleReset() {
    window.location.reload()
  }


  return (

    <div className="App" style={{ color: state.textColor }}>
      <div className="reset resetColor" onClick={handleReset}>RESET</div>
      <h2>1. W czym mogę pomóc?</h2>
      <h2>2. Jakiego numeru dotyczy sprawa?</h2>
      <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
      <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
      <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
      <p>{state.answer}</p>
      {state.answer === null ? (
        <></>
      ) : state.answer === true ? (
        <div>
          <OwnerOfTheNumberConfirmed />

        </div>
      ) : (
        <div>
          <h3>IDENTYFIKACJA NEGTYWNA Poinformuj klienta o braku możliwości obsługi z uwagi na błędne dane lub ich brak. Zaproś do ponownego kontaktu, kiedy klient będzie znał poprawne dane do identyfikacji, bądź zaproś do sklepu z dowodem osobistym jeśli jest właścicielem usługi.</h3>
        </div>
      )}
    </div>


  );
}


