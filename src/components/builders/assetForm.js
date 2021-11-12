<<<<<<< HEAD
import styled from "@emotion/styled";

=======
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c
// A generic form that takes a key as an argument
// and returns input elements to be added to a form.
// @param {labelKey} unique int/string

import { useState } from "react";

const AssetForm = ({labelKey}) => {
    const [name, setName] = useState(""); // Name State Hook
    const [amount, setAmount] = useState("1"); // Amount State Hook
<<<<<<< HEAD

    const Container = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    `;
    
    return (
        <div className="flex-container">
            <div>
                <label>
                Name of Asset # {labelKey + 1}
                <input 
                    id={"assetName" + labelKey}
                    type="text" 
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                </label>
            </div>
            
            <div>
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
            </div><br/>
            
=======
    
    return (
        <div>
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
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c
        </div>
    )
}

export default AssetForm;