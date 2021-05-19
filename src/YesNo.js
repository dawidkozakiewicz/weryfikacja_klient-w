import React, { useReducer } from "react";



function reducer(state, action) {
    switch (action.type) {
        case "yes":
            return { ...state, answer: true, yesButtonColor: "green", noButtonColor: "gray" };
        case "no":
            return { ...state, answer: false, noButtonColor: "red", yesButtonColor: "gray" };
    }
}

const YesNo = (props) => {
    console.log(props)

    const { nextStepComponent, negativeAnswerComponent } = props

    const [state, dispatch] = useReducer(reducer, { answer: null, yesButtonColor: "gray", noButtonColor: "gray", text: "" });

    function confirm(e) {
        dispatch({ type: "yes" });

    }

    function deny(e) {
        dispatch({ type: "no" });
    }

    return (
        <div className="App">
            <button onClick={confirm} style={{ background: state.yesButtonColor }}>TAK</button>
            <button onClick={deny} style={{ background: state.noButtonColor }}>NIE</button>
            <p>{state.answer}</p>
            {state.answer === null ? (
                <></>
            ) : state.answer === true ? (
                <>
                    <p>{props.textYes}</p>
                    {nextStepComponent}
                </>

            ) : (
                <>
                    <p>{props.textNo}</p>
                    {negativeAnswerComponent}
                </>


            )}
        </div>
    );

}

export default YesNo