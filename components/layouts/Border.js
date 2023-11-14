import React from 'react';

function Border({ children }) {
    return (
        <div className="border-2 border-gray-400 p-4">
            {children}
        </div>
    );
}

export default Border;
