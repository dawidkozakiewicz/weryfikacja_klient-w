import React from 'react'
import YesNo from './YesNo'
import { answers } from './answers'
import IsTheSamePerson from './IsTheSamePerson'



const ConfirmationOfOwnership = () => {
    return (
        <div>
            <YesNo textYes={answers.text1} textNo={answers.text2} nextStepComponent={IsTheSamePerson} />

        </div>
    )
}

export default ConfirmationOfOwnership
