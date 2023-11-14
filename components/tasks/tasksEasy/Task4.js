import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import { H1, H2, H3 } from '../../layouts/Headings';
import Paragraph from '../../layouts/Paragraph';

function Task4() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function reverseWords() {
        const str = "Hello World! I'm Jaro!";
        const wordsArray = str.split(' '); // Splitting the string by space
        const reversedWordsArray = wordsArray.map(word => {
            return word.split('').reverse().join('')
        });
        const reversedStr = reversedWordsArray.join(' ');

        setResult({ reverseWords: reversedStr });
        setShowAlgorithm(true);
    }



    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 4:</H1>
            <H2 className='font-bold text-xl'>Reversing Words in a String </H2>
            <Paragraph>Write a function that takes a string as an argument and returns a new string where each word is reversed, but the order of words remains unchanged.
                In this task, you will need to split the original string into words, reverse each word, and then join the reversed words back into a string.
            </Paragraph>
            <H3>Example:</H3>
            <Preformatted>
                {`function reverseWords(str) {
    // your code here
}

const result = reverseWords("Hello World! I'm Jaro!");
console.log(result);  // Output: "olleH !dlroW m'I !oraJ"
`}
            </Preformatted>
            <Button onClick={reverseWords}>Solve the problem</Button>

            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`
function reverseWords() {
    const str = "Hello World! I'm Jaro!";
    const wordsArray = str.split(' '); // Splitting the string by space
    const reversedWordsArray = wordsArray.map(word => {
        return word.split('').reverse().join('')
    });
    const reversedStr = reversedWordsArray.join(' ');
console.log(reversedStr); 
}

reverseWords(); // olleH !dlroW m'I !oraJ

        ---------- or like that: ----------

        const str = "Hello World! I'm Jaro!";
        const wordsArray = str.split(' '); // Splitting the string by space
        const reversedWordsArray = wordsArray.map(word => {
            return word.split('').reverse().join('')
        });
        const reversedStr = reversedWordsArray.join(' ');
  console.log(reversedStr);   // olleH !dlroW m'I !oraJ
    }`
                        }
                    </Preformatted>

                </div>
            )}

            {
                result && (
                    <div>
                        <H3>Result: {JSON.stringify(result.reverseWord)}</H3>
                    </div>
                )
            }

        </div >
    );
}

export default Task4;
