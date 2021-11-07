import { useState } from "react";
import AssetBuilder from "./assetBuilder";

const ObjectBuilder = () => {
    const [objectEventChange, setObjectEventChange] = useState("");
    const [assetEventChange, setAssetEventChange] = useState(1);
    const [view, setView] = useState("");

    /* ----------------------------------------------------------------------------
     * Sends parentObj and the number of assets to the asset builder component
     * @params {parentObj} string
     * @params {numOfAssets} int
    */
    const sendDataToAssetBuilder = (parentObj, numOfAssets) => {
        setView(
            <AssetBuilder 
                parentObjName={parentObj} 
                numOfAssets={numOfAssets}
            />
        )
    }

    let objectForm = (
        <div id="objForm">
            <h1>Create Your Combination</h1>
            <form 
                onSubmit={(e)=> {
                    e.preventDefault();

                    sendDataToAssetBuilder(
                        document.getElementById("parentTextInput").value, 
                        document.getElementById("numberOfAssets").value
                    );

                    document.getElementById("objForm").style.display = "none"; // Hide form after submission
                }
            }>
                    
                <label>
                    Name of Parent Object:
                    <input 
                        id="parentTextInput" 
                        type="text" 
                        value={objectEventChange} 
                        onChange={e => setObjectEventChange(e.target.value)}
                    />
                </label><br/>

                <label>
                    How many assets for this object:
                    <input 
                        id="numberOfAssets" 
                        type="number" 
                        min="1" 
                        value={assetEventChange} 
                        onChange={e => setAssetEventChange(e.target.value)}
                    />
                </label><br/>
                
                <input type="submit" value="Submit" />
                
            </form>
        </div>
    );

    return (
        <div>
            {objectForm}
            {view}
        </div>
    )

}

export default ObjectBuilder;