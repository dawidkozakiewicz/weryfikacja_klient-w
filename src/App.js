import React, { useReducer } from "react";
import TheSameCustomer from "./yes";
import DoesntKnow from "./no";





function reducer(state, action) {
  switch (action.type) {
    case "yes":
      return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
    case "no":
      return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray" });

  function confirm(e) {
    dispatch({ type: "yes" });

  }

  function deny(e) {
    dispatch({ type: "no" });
  }



  return (
    <div className="App">


      <h2>1. W czym mogę pomóc?</h2>
      <h2>2. Jakiego numeru dotyczy sprawa?</h2>
      <h2>3. Na kogo zarejestrowany jest numer? Czy klient wie?</h2>
      <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
      <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
      <p>{state.answer}</p>
      {state.answer === null ? (
        <></>
      ) : state.answer === true ? (
        <TheSameCustomer />
      ) : (
        <DoesntKnow />
      )}
    </div>
  );

}


