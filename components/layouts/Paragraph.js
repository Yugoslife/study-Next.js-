// src/components/Paragraph.js
import React from 'react';

function Paragraph({ children }) {
    if (typeof children === 'string') {
        return (
            <div className="max-w-xl ml-4">
                {children.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                        {paragraph}
                    </p>
                ))}
            </div>
        );
    }
    return <div className="max-w-xl ml-4">{children}</div>;
}

export default Paragraph;


