import React from 'react'
import YesNo from './YesNo'
import PrivPersAndSoleProp from './PrivPersAndSoleProp'
import { answers } from './answers'

const IsTheSamePerson =
    (
        <div>
            <YesNo textYes={answers.text3} textNo={answers.text8} nextStepComponent={PrivPersAndSoleProp} />

        </div>

    )

export default IsTheSamePerson