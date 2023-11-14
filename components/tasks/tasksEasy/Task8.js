import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import { H1, H2, H3 } from '../../layouts/Headings';
import Paragraph from '../../layouts/Paragraph';

function Task8() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function removeElement(arr, elem) {
        const filteredArray = arr.filter(element => element !== elem);
        setResult(filteredArray);
        setShowAlgorithm(true);
    }


    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 8:</H1>
            <H2 className='font-bold text-xl'>Сумма элементов массива </H2>
            <Paragraph>
                Цель: Написать функцию, которая
                вычисляет сумму всех чисел в массиве.
                <br /> <br />
                В этой задаче вам нужно будет использовать
                циклы или методы массивов JavaScript для итерации по
                элементам массива и вычисления их суммы. Попробуйте решить
                задачу сначала с помощью цикла for, а затем, для более сложного
                вызова, используйте метод reduce массива.
                Это поможет вам лучше понять разные способы
                работы с массивами в JavaScript.
                <br /> <br />

            </Paragraph>
            <H3>Example:</H3>
            <Preformatted>
                {`
                function sumArray(arr) {
                    // Ваш код здесь
                }
                
                const result = sumArray([1, 2, 3, 4, 5]);
                console.log(result);  // Вывод: 15
                
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

export default Task8;
