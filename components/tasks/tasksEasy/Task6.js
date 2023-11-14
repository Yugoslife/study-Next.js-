import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import { H1, H2, H3 } from '../../layouts/Headings';
import Paragraph from '../../layouts/Paragraph';

function Task6() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function sortArray() {
        let arr = [34, 7, 23, 32, 5, 62];
        let ascent = arr.slice().sort((a, b) => a - b);
        let descent = arr.slice().sort((a, b) => b - a);
        let result = { ascent, descent };

        setResult(result);
        setShowAlgorithm(true);
    }



    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 6:</H1>
            <H2 className='font-bold text-xl'>Array Sorting </H2>
            <Paragraph> Your task is to write a function that will sort an array of numbers in ascending order.
                <br /> <br />
                In this task, you will need to use JavaScript methods for working with arrays. Try to solve the task using the built-in sort method or, for a more challenging call, try implementing your own sorting algorithm, such as bubble sort or insertion sort.</Paragraph>
            <H3>Example:</H3>
            <Preformatted>
                {`
                Array Sorting
`}
            </Preformatted>
            <Button onClick={sortArray}>Solve the problem</Button>

            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`{

        ---------- *test* ----------
        
    }`
                        }
                    </Preformatted>
                </div>
            )}

            {
                result && (
                    <div>
                        <H3>Result: {JSON.stringify(result)}</H3>
                    </div>
                )
            }

        </div >
    );
}

export default Task6;
