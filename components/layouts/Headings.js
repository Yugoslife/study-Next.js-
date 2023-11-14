// src/components/Headings.js
import React from 'react';

export function H1({ children }) {
    return <h1 className="text-2xl font-bold leading-tight text-gray-900 mt-2 mb-2">{children}</h1>;
}

export function H2({ children }) {
    return <h2 className="text-xl font-semibold leading-tight text-gray-800 mt-2 mb-2">{children}</h2>;
}

export function H3({ children }) {
    return <h3 className="text-md font-semibold leading-tight text-gray-600 mt-2 mb-2">{children}</h3>;
}

