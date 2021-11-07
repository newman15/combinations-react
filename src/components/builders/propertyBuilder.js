import { useState } from "react";
import Output from "./output/outPut";
import PropertyForm from "./propertyForm";

/* ----------------------------------------------------------------------------
 * Property Builder
 * @param {objName} string - Name of the parent Object
 * @param {inputArray} array of objects - Contains the assetNames and assetAmounts
*/
const PropertyBuilder = ({objName, inputArray}) => {

    let finalCombinationArray = [];
    let assetNamesArray = [];
    let propNamesArray = [];
    let totalUniqueFields; // Total number of unique fields in the final combination
    let [outPutView, setOutPutView] = useState("");

    /* ------------------------------------------------------------------------
     * Function that pushes the GenericForm component into the assetNamesArray
     * numOfAssets times.
    */
    const createInputForm = () => {
        let count = 0; let i = 0;
        for(i; i < inputArray.length; i++){
            assetNamesArray.push(inputArray[i].assetName);
            propNamesArray.push(<h3 key={"assetName" + i}>{inputArray[i].assetName}</h3>)
            for (let j = 0; j < inputArray[i].assetAmount; j++){
                propNamesArray.push(
                    <PropertyForm labelKey={count} assetName={inputArray[i].assetName} key={count} />
                )
                count++;
            }
        }
        totalUniqueFields = count;
    }

    createInputForm();

    return(
        <div id="propertyForm">
            <h1>{objName}</h1>

            <form onSubmit={e => {
                e.preventDefault();
                for (let i = 0; i < totalUniqueFields; i++){
                    finalCombinationArray.push(
                        {
                            object: objName,
                            assetName: document.getElementById("propFormAssetName" + i).innerHTML,
                            propertyName: document.getElementById("propName" + i).value,
                            propertyAmount: document.getElementById("propAmount" + i).value
                        }
                    )
                }

                let buildType = document.querySelector('input[name="buildType"]:checked').value;
                setOutPutView(<Output arrayOfObj={finalCombinationArray} assetNamesArray={assetNamesArray} buildType={buildType} />);
            }}>

                {propNamesArray}

                <br/>
                <label>
                Regular Build
                    <input 
                        type="radio"
                        id="regularBuild"
                        name="buildType"
                        value="regularBuild"
                    />
                </label>

                <label>
                Random Build
                    <input 
                        type="radio"
                        id="randomBuild"
                        name="buildType"
                        value="randomBuild"
                    />
                </label><br/><br/>

                <input type="submit" value="Submit" />
            </form>

            {outPutView}
        </div>
    )
}

export default PropertyBuilder; 
