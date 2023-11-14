import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import { H1, H2, H3 } from '../../layouts/Headings';
import Paragraph from '../../layouts/Paragraph';

function Task7() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function removeElement(arr, elem) {
        const filteredArray = arr.filter(element => element !== elem);
        setResult(filteredArray);
        setShowAlgorithm(true);
    }


    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 7:</H1>
            <H2 className='font-bold text-xl'>Удаление элементов массива </H2>
            <Paragraph>
                Напишите функцию, которая удаляет все вхождения
                заданного элемента из массива.
                <br /> <br />
                В этой задаче вам нужно будет пройтись
                по массиву и удалить все вхождения заданного
                элемента. Попробуйте решить задачу, используя циклы
                и методы массивов в JavaScript, такие как filter.
                <br /> <br />

            </Paragraph>
            <H3>Example:</H3>
            <Preformatted>
                {`
                function removeElement(arr, elem) {
                    // Ваш код здесь
                }
                
                const result = removeElement([3, 1, 2, 3, 4, 3], 3);
                console.log(result);  // Вывод: [1, 2, 4]
                
`}
            </Preformatted>
            <Button onClick={() => removeElement([1, 2, 3, 4, 3, 5, 3], 3)}>Solve the problem</Button>

            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`{
function removeElement(arr, elem) {
    const filteredArray = arr.filter(element => element !== elem);
    setResult(filteredArray);
    setShowAlgorithm(true);
}
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

export default Task7;
