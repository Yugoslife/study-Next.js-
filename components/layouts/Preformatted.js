import React from 'react';

function Preformatted({ children }) {
    return (
        <pre className="bg-gray-200 p-4">
            {children}
        </pre>
    );
}

export default Preformatted;
