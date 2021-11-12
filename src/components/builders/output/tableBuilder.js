import styled from "@emotion/styled";
<<<<<<< HEAD
import ReactHTMLTableToExcel from "react-html-to-excel";
=======
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c

/* ----------------------------------------------------------------------------
 * Builds and returns a html table of combinations.
 * @params {arrayOfObj} array
*/
const BuildHtmlTable = ({arrayOfObj, assetNamesArray}) => {

    // ------------------------------Styling-----------------------------------
    const Container = styled.div`
        height: 500px;
        overflow-x: auto;
        overflow: scroll;
        border: solid 5px;
        padding: 10px;
    `;
    // ------------------------------------------------------------------------

    let titleData = []; // Create array to store title data as JSX
    let title; // The final Title JSX
    let tableBodyData = []; // Create array to store the table data as JSX
    let tableBody; // The final table body JSX
    let keyCount = 0; // Keeps track of keys in table data

    titleData[0] = (<th key="titleHeader"><b>#</b></th>); // Initialize titleData

    // Loop through all elements in the assetNames array to build the title
    for (let i = 0; i < assetNamesArray.length; i++){
        titleData.push(
            <th key={"titleElements" + i}><b>{assetNamesArray[i]}</b></th>
        );
    }

    // Set the title to include the <tr> elements
    title = (
        <thead>
            <tr key="title">
                {titleData}
            </tr>
        </thead>
        
    );

    // Loop through arrayOfObj to build the table body
    for (let i = 0; i < arrayOfObj.length; i++){
        let tempArray = [<td key={"#" + i}>{i + 1}</td>]; // Temp array to store row data

        for (let j = 0; j < assetNamesArray.length; j++){
            tempArray.push(
                <td key={"tableBodyElements" + keyCount}>{arrayOfObj[i][assetNamesArray[j]]}</td>
            );

            keyCount++;
        }

        // Pushes the temArray row data into the tableBodyData array, which 
        // will get rendered to the DOM
        tableBodyData.push(
            <tr key={"tableRow" + i}>{tempArray}</tr>
        )
    }

    // Complete the table body with the parent HTML tags
    tableBody = (
        <tbody>
            {tableBodyData}
        </tbody>
        
    );

    return (
        <Container>
            <h1 id="top-of-page">Table Results For: {arrayOfObj[0].object}</h1>
<<<<<<< HEAD
            <table id="table-to-xls">
                {title}
                {tableBody}
            </table><br/>

            <a href="#top-of-page">Return to the top</a><br/><br/><br/>
            
            <ReactHTMLTableToExcel
                id="test-table-xls-button"
                className="download-table-xls-button"
                table="table-to-xls"
                filename="combination-results"
                sheet="tablexls"
                buttonText="Download As Excel"
            />
=======
            <table>
                {title}
                {tableBody}
            </table>
            <a href="#top-of-page">Return to the top</a>
>>>>>>> b12a32df004fb604973d3af605189ec05c408e1c
        </Container>
        
    );
}

export default BuildHtmlTable;