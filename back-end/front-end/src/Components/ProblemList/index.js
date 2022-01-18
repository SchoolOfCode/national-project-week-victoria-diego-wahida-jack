import React from 'react'
import ProblemRow from '../ProblemRow'

function ProblemList({problems}) {
    return (
        <div>
            <ProblemRow problems={problems}></ProblemRow>
        </div>
    )
}

export default ProblemList
