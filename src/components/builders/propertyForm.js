import styled from "@emotion/styled";

// A generic form that takes a key as an argument
// and returns input elements to be added to a form.
// @param {labelKey} unique int/string

import { useState } from "react";

const PropertyForm = ({labelKey, assetName}) => {
    const [name, setName] = useState(""); // Name State Hook
    const [amount, setAmount] = useState("1"); // Amount State Hook

<<<<<<< HEAD
    // This is to hide the asset name on each loop in propertyBuilder.js
    // propertyBuilder.js uses {assetName} to populate data.
=======
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c
    const Hide = styled.div`
        display: none;
    `;

    return (
<<<<<<< HEAD
        <div className="flex-container">
=======
        <div>
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c
            <Hide id={"propFormAssetName" + labelKey}>{assetName}</Hide>
            <label>
            Property Name:
            <input 
                id={"propName" + labelKey}
                type="text" 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            </label>

            <label>
            Number of occurrences for: <b>"{name}"</b>
            <input 
                id={"propAmount" + labelKey}
                type="number" 
                min="1"
                value={amount}
                onChange={e => setAmount(e.target.value)}
            />
<<<<<<< HEAD
            </label><br/>
=======
            </label>
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c
        </div>
    )
}

export default PropertyForm;