import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import { H1, H2, H3 } from '../../layouts/Headings';
import Paragraph from '../../layouts/Paragraph';

function Task5() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function countDuplicateCharacters() {
        const str = "Hello World!".toLowerCase();
        let charCount = {};
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ') continue;
            charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        }

        let result = {};

        for (let char in charCount) {
            if (charCount[char] > 1) {
                result[char] = charCount[char]
            }
        };

        setResult(result);
        setShowAlgorithm(true);
    }



    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 5:</H1>
            <H2 className='font-bold text-xl'>Duplicate Character Count. </H2>
            <Paragraph>Write a JavaScript function named countDuplicateCharacters that takes a string as an argument and returns an object containing the count of characters that appear more than once in the string.
                <br /> <br />In this task, you're asked to write a function that will count the occurrences of each character in a given string, but only include characters in the result object that appear more than once.
                The order in which the characters appear in the object does not matter.
                <br /> <br />You will need to iterate through the string, keep a count of the occurrences of each character, and then filter out the characters that only appear once. This will help you practice working with strings, objects, and iteration in JavaScript.
            </Paragraph>
            <H3>Example:</H3>
            <Preformatted>
                {`function countDuplicateCharacters(str) {
    // Your code here
}

const result = countDuplicateCharacters("hello world!");
console.log(result);  // Output: {l: 3, o: 2}

`}
            </Preformatted>
            <Button onClick={countDuplicateCharacters}>Solve the problem</Button>

            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`{
function countDuplicateCharacters() {
    const str = "Hello World!".toLowerCase();
    let charCount = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === ' ') continue;
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    let result = {};

    for (let char in charCount) {
        if (charCount[char] > 1) {
            result[char] = charCount[char]
        }
    }

console.log(result)
}

undefined
countDuplicateCharacters()   // {l: 3, o: 2}

        ---------- or like that: ----------
        const str = "Hello World!".toLowerCase();
        let charCount = {};
        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ') continue;
            charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        }

        let result = {};

        for (let char in charCount) {
            if (charCount[char] > 1) {
                result[char] = charCount[char]
            }
        }

console.log(result)        // {l: 3, o: 2}
        
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

export default Task5;
