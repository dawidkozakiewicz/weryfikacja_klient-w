import React from 'react'
import YesNo from './YesNo'
import { answers } from './answers'
import HardVerificationResult from './HardVerificationResult'

const PrivPersAndSoleProp =
    (
        <div>
            <YesNo textYes={answers.text4} textNo={answers.text9} nextStepComponent={HardVerificationResult} />
        </div>
    )


export default PrivPersAndSoleProp
