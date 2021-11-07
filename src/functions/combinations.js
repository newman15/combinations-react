/* ----------------------------------------------------------------------------
 * Function that does a linear combination across the various array elements.
 * This combines the first element in a given category with the first element
 * in the next and so on... exhausting the combination until the total amount 
 * is met.
*/
exports.linearBuild = (arrayOfObjects) => {

    let data = arrayOfObjects; // Save argument as data variable

    let combinations = []; // New array
    let count = 0; // Keeps track of index in relation to data[i].amount
    let assetCheck = data[0].assetName; // Get the category of first element

    // Loop through contents of data
    for (let i = 0; i < data.length; i++){
        let currentAsset = data[i].assetName;

        // If the category has changed, reset count to 0.
        // This sets the next category to input data at index 0.
        if (assetCheck !== currentAsset){
            count = 0; // Reset count because the asset has changed
            assetCheck = currentAsset; // Reasign assetCheck to the current asset
        }
        
        // Add data[i].propertyName to combinations data[i].propertyAmount times
        for (let j = 0; j < data[i].propertyAmount; j++){

            // If this is first time through combinations, create obj at index[count]
            if (combinations[count] === undefined){
                combinations[count] = {object: data[i].object, [data[i].assetName]: data[i].propertyName};
            }
            // Else, add to obj the new category data
            else {
                combinations[count][data[i].assetName] = data[i].propertyName;
            }

            count++;
        }
    }

    return combinations;
}

/* ----------------------------------------------------------------------------
 * Function that does a random combination across the various array elements.
 * This assigns the first x amount of elements in the first category to a new 
 * array of objects. The remaining categories are assigned to a random index 
 * within the newly created array of objects.
*/
exports.randomBuild = (arrayOfObjects) => {

    let data = arrayOfObjects; // Save argument as data variable
    let randomCombinations = [];
    let randomCategories = [data[0].assetName]; // Get category of first element
    let count = 0; // Keeps track of index in relation to data[i].amount
    let assetCheck = data[0].assetName; // Get the category of first element
    let randomIndexes; // Will store an array of shuffled non repetitive numbers

    // Loop through contents of data
    for (let i = 0; i < data.length; i++){
        let currentAsset = data[i].assetName;

        // console.log("\n\nCurrent Asset:");
        // console.log(currentAsset);

        // If the category has changed, call shuffleArray().
        if (assetCheck !== currentAsset){
            let numOfIndexes = count; // Store total num of elements for given object
            randomIndexes = shuffleArray(numOfIndexes); // Create random shuffle of numbers 
            count = 0; // Reset count to 0
            assetCheck = currentAsset; // Assign assetCheck to the currentAsset
            randomCategories.push(currentAsset);
        }
        
        // Add data[i].type to dataCombinations data[i].amount times
        for (let j = 0; j < data[i].propertyAmount; j++){

            // If this is first time through dataCombinations, create obj at index[count]
            if (randomCombinations[count] === undefined){
                randomCombinations[count] = {object: data[i].object, [data[i].assetName]: data[i].propertyName};
            }
            // Else, add to obj the new category data
            else {
                randomCombinations[randomIndexes[count]][data[i].assetName] = data[i].propertyName;
            }

            count++;
        }
    }

    return randomCombinations;
    
}

/* ----------------------------------------------------------------------------
 * Function that creates and returns an array with random numbers and no repeats.
 * https://stackoverflow.com/questions/5836833/create-an-array-with-random-values
 * @params {size} int
*/
const shuffleArray = (size) => {
    let array = [];
    var tmp, current, top = size;

    // Builds array of numbers 0 - size
    for (let i = 0; i < size; i++) {
        array[i] = i;
    }

    if (top) {
        // While top can still decrement (Not at end)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1)); // Create random int
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    }

    // return array.sort((a,b) => {return a-b}) // Sorted version for testing purposes
    return array;
}