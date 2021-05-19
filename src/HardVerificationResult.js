import React from 'react'
import YesNo from './YesNo'
import QuestionAboutCase from './QuestionAboutCase'
import { answers } from './answers'


const HardVerificationResult =
    (
        <div>
            <YesNo textYes={answers.text6} textNo={answers.text7} negativeAnswerComponent={QuestionAboutCase} />

        </div>
    )


export default HardVerificationResult

