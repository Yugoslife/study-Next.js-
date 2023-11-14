import React from "react";

function Button({ children, onClick, ...otherProps }) {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-600 text-white-200 text-center flex items-center justify-center font-bold py-2 px-4 rounded mt-4 mb-2"
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
}

export default Button;