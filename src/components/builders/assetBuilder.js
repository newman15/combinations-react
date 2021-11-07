import styled from '@emotion/styled';
import { useState } from 'react';
import AssetForm from './assetForm';
import PropertyBuilder from './propertyBuilder';

const AssetBuilder = ({parentObjName, numOfAssets}) => {

    // -------------------------- Styled Components ---------------------------
    const Container = styled.div`
        display: flex;
        flex-direction: column;
    `;
    // ------------------------------------------------------------------------

    let assetNamesArray = []; // Array that stores the GenericForm components for user input
    let sendArrayToPropBuilder = []; // The array that gets passed to PropertyBuilder component
    const [propView, setPropView] = useState(""); // State Hook for PropertyBuilder component

    /* ------------------------------------------------------------------------
     * Function that pushes the GenericForm component into the assetNamesArray
     * numOfAssets times.
    */
    const createInputForm = () => {
        for(let i = 0; i < numOfAssets; i++){
            assetNamesArray.push(
                <AssetForm labelKey={i} key={i}/>
            )
        }
    }

    createInputForm();

    // ------------------------------------------------------------------------

return (
        <div>
            <div id="assetForm">
                <h2>Enter the asset names for <i>{parentObjName}</i></h2>
                <form onSubmit={e => {
                    e.preventDefault();

                    // Loop through Asset Names and console log value
                    for (let i = 0; i < numOfAssets; i++){
                        sendArrayToPropBuilder.push({
                            assetName: document.getElementById("assetName" + i).value,
                            assetAmount: document.getElementById("assetAmount" + i).value
                        })
                    }

                    document.getElementById("assetForm").style.display = "none";
                    setPropView(<PropertyBuilder objName={parentObjName} inputArray={sendArrayToPropBuilder} />);
                }}>
                    <Container>
                        {assetNamesArray}
                    </Container>
                    <input type="submit" value="Submit" />
                </form>
            </div>

            <div id="propBuilder">
                {propView}
            </div>
            
        </div>
    )
}

export default AssetBuilder;