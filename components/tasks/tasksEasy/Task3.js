import React, { useState } from 'react';
import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import Button from '../../Button';
import Preformatted from '../../layouts/Preformatted'
import { H1, H2, H3 } from '../../layouts/Headings';
import Paragraph from '../../layouts/Paragraph';

function Task3() {
    const [result, setResult] = useState(null);
    const [showAlgorithm, setShowAlgorithm] = useState(false);

    function countCharacters() {
        let str = "Hello World! I'm Jaro!";
        let charCount = {};
        str = str.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ') continue;
            charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        }

        setResult({ charCount });
        setShowAlgorithm(true);
    }



    return (
        < div className='flex flex-col items-start pl-3' >
            <H1>Task 3:</H1>
            <H2 className='font-bold text-xl'>Character Count in a String. </H2>
            <Paragraph>Write a function that takes a string as an argument and returns an object that contains a count of each character in the string.
                Ignore spaces and perform the count case-insensitively.</Paragraph>
            <H3>Example:</H3>
            <Preformatted>
                {`function countCharacters(str) {
                    // your code here
                }
                
                const result = countCharacters("Hello World!");
                console.log(result);  
                // Output: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, '!': 1 }
                `}
            </Preformatted>
            <Button onClick={() => countCharacters()}>Solve the problem</Button>

            {showAlgorithm && (
                <div>
                    <H3> Algorithm:</H3>
                    <Preformatted>
                        {`function countCharacters(str) {
        let charCount = {};
        str = str.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ') continue;
            charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        }

        return charCount;

        countCharacters("Hello World!");  //{h: 1, e: 1, l: 3, o: 2, w: 1, …}

        ---------- or like that: ----------

        let str = "Hello World!"
        let charCount = {};
        str = str.toLowerCase();

        for (let i = 0; i < str.length; i++) {
            let char = str[i];
            if (char === ' ') continue;
            charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        }

console.log(charCount);  //{h: 1, e: 1, l: 3, o: 2, w: 1, …}

    }`
                        }
                    </Preformatted>

                </div>
            )}

            {
                result && (
                    <div>
                        <H3>Result: {JSON.stringify(result.charCount)}</H3>
                    </div>
                )
            }

        </div >
    );
}

export default Task3;
