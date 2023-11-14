import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import Paragraph from '../../layouts/Paragraph'
import { H1, H2, H3 } from '../../layouts/Headings';
import Border from '../../layouts/Border';

function Task2() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function findMinMax() {
        let arr = [34, 7, 23, 32, 5, 62];
        let min = arr[0];
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        setResult({ min, max });
        setShowAlgorithm(true);
    }

    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 2:</H1>
            <H2>Find the maximum and minimum values in the array (`for`). </H2>
            <Border>let arr = [34, 7, 23, 32, 5, 62];</Border>
            <Button onClick={findMinMax}>Solve the problem</Button>

            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`function findMinMax() {
    let arr = [34, 7, 23, 32, 5, 62];
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {min, max};
}

const result = findMinMax();
console.log(result.min); // 5
console.log(result.max); // 62

---------- or like that: ----------

let arr = [34, 7, 23, 32, 5, 62];
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }

console.log(min, max); // 5, 62
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

export default Task2;
