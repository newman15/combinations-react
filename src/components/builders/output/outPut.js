import BuildHtmlTable from '../output/tableBuilder';
import Plot from "react-plotly.js";

const combo = require("../../../functions/combinations");

const Output = ({arrayOfObj, assetNamesArray, buildType}) => {
    let graphPropNames = []; // Array to store property names
    let graphPropAmounts = []; // Array to store property amounts

    let graphData = []; // Graph Data Array
    let graphJSXArray = []; // Array that stores the graph JSX for each asset/prop 
    let newCombination; // Stores the Linear/Random arrayOfObj to be sent to <BuildHTMLTable />

    const getGraphData = (obj) => {
        let tempAssetName = obj[0].assetName; // Set tempAssetName to first assetName
        let tempObj = {
            [obj[0].assetName]: {
                [obj[0].propertyName]: obj[0].propertyAmount
            }
        };

        for (let i = 0; i < obj.length; i++){
            graphPropNames.push(obj[i].propertyName);
            graphPropAmounts.push(obj[i].propertyAmount);

            // If asset names match then add like properties
            if(tempAssetName === obj[i].assetName){
                tempObj[tempAssetName][obj[i].propertyName] = obj[i].propertyAmount;
            }

            if (tempAssetName !== obj[i].assetName){
                graphData.push(tempObj);
                tempAssetName = obj[i].assetName;
                tempObj = {
                    [obj[i].assetName]: {
                        [obj[i].propertyName]: obj[i].propertyAmount
                    }
                };
            }
            if (i === obj.length - 1){
                graphData.push(tempObj);
            }
        }

    }

    const buildGraphs = () => {
        for (let i = 0; i < graphData.length; i++){
            graphJSXArray.push(
                <Plot key={i}
                    data={[
                        // Asset Names
                        {
                            values: Object.values(graphData[i][assetNamesArray[i]]),
                            labels: Object.keys(graphData[i][assetNamesArray[i]]),
                            type: 'pie'
                        }
                    ]}
                    layout={{title: `${Object.keys(graphData[i])}`, width: 300}}
                />
            );
        }
    }

    const getLinearCombo = () => {
		newCombination = combo.linearBuild(arrayOfObj);
	}

	const getRandomCombo = () => {
		newCombination = combo.randomBuild(arrayOfObj);
	}

    if (buildType === 'regularBuild'){
        getLinearCombo();
    }
    else {
        getRandomCombo();
    }

    getGraphData(arrayOfObj); // Call getGraphData()
    buildGraphs(); // Call buildGraphs()

    return (
        <div>
            <BuildHtmlTable arrayOfObj={newCombination} assetNamesArray={assetNamesArray} /><br/>
            {graphJSXArray}
        </div>
    )
}

export default Output;