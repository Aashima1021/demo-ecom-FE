import React from 'react'

const Input = ({ type, className, id }) => {
    return (
        <input type={type} className={className}
            id={id}
        />
    )
}

export default Input