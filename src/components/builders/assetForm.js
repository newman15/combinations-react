import styled from "@emotion/styled";

// A generic form that takes a key as an argument
// and returns input elements to be added to a form.
// @param {labelKey} unique int/string

import { useState } from "react";

const AssetForm = ({labelKey}) => {
    const [name, setName] = useState(""); // Name State Hook
    const [amount, setAmount] = useState("1"); // Amount State Hook
    
    return (
        <div className="flex-container">
            <label>
            Name of Asset # {labelKey + 1}
            <input 
                id={"assetName" + labelKey}
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            </label>

            <label>
            Number of Properties for: <b>"{name}"</b>
            <input 
                id={"assetAmount" + labelKey}
                type="number" 
                min="1"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
            </label>
        </div>
    )
}

export default AssetForm;