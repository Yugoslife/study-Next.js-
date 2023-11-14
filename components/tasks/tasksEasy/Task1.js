import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import Paragraph from '../../layouts/Paragraph';
import { H1, H2, H3 } from '../../layouts/Headings';
import Border from '../../layouts/Border';

function Task1() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function findMinMax() {
        let arr = [34, 7, 23, 32, 5, 62];
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        setResult({ min, max });
        setShowAlgorithm(true);
    }

    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 1:</H1>
            <H2>Find the maximum and minimum values in the array (`Math.min` and `Math.max`). </H2>
            <Border>let arr = [34, 7, 23, 32, 5, 62];</Border>
            <Button onClick={findMinMax}>Solve the problem</Button>
            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`function findMinMax() {
    let arr = [34, 7, 23, 32, 5, 62];
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { min, max };
}
const result = findMinMax();
console.log(min, max);

---------- or like that: ----------

let arr = [34, 7, 23, 32, 5, 62];
    let min = Math.min(...arr);
    let max = Math.max(...arr);

console.log(min, max);
                        `}
                    </Preformatted>
                </div>
            )}

            {
                result && (
                    <div>
                        <H3>Minimum: {result.min}</H3>
                        <H3>Maximum: {result.max}</H3>
                    </div>
                )
            }

        </div >
    );
}

export default Task1;
