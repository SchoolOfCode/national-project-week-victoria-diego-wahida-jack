import React from 'react'
import ProblemDetails from "../ProblemDetails"
import ProblemButtons from '../ProblemButtons'

function ProblemRow({problems}) {
    return (
        <div>
            <ProblemDetails problems={problems}></ProblemDetails>
            <ProblemButtons></ProblemButtons>
        </div>
    )
}

export default ProblemRow
