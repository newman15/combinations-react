import BuildHtmlTable from '../output/tableBuilder';

const combo = require("../../../functions/combinations");

const Output = ({arrayOfObj, assetNamesArray, buildType}) => {
    let newCombination; // Stores the Linear/Random arrayOfObj to be sent to <BuildHTMLTable />

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

    return (
        <div>
            The Type of build is: {buildType}
            <BuildHtmlTable arrayOfObj={newCombination} assetNamesArray={assetNamesArray} />
        </div>
    )
}

export default Output;