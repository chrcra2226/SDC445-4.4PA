import React from 'react';

const InputField = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder="Write your message..."
        />
    );
};

export default InputField;