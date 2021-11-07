import styled from "@emotion/styled";

/* ----------------------------------------------------------------------------
 * Builds and returns a html table of combinations.
 * @params {arrayOfObj} array
*/
const BuildHtmlTable = ({arrayOfObj}) => {

    // ------------------------------Styling-----------------------------------
    const Container = styled.div`
        height: 500px;
        overflow-x: auto;
        overflow: scroll;
        border: solid 5px;
        padding: 10px;
    `;
    // ------------------------------------------------------------------------

    // Create array to store table JSX
    // Initialize with static data (Column Titles)
    let returnData = [
        <tr key="title">
            <th><b>#</b></th>
            <th><b>Blaster</b></th>
            <th><b>Background</b></th>
            <th><b>Optics</b></th>
            <th><b>Finish</b></th>
            <th><b>Magazine</b></th>
            <th><b>Stock</b></th>
            <th><b>Muzzle</b></th>
            <th><b>Attachment_1</b></th>
            <th><b>Attachment_2</b></th>
            <th><b>Attachment_3</b></th>
            <th><b>Bonus</b></th>
        </tr>
    ];

    // Loop through arrayOfObj indexes and add
    // the table data to the array
    for (let i = 0; i < arrayOfObj.length; i++){
        returnData.push(
            <tr key={i}>
                <td>{i+1}.</td>
                <td>{arrayOfObj[i].blaster}</td>
                <td>{arrayOfObj[i].background}</td>
                <td>{arrayOfObj[i].optics}</td>
                <td>{arrayOfObj[i].finish}</td>
                <td>{arrayOfObj[i].magazine}</td>
                <td>{arrayOfObj[i].stock}</td>
                <td>{arrayOfObj[i].muzzle}</td>
                <td>{arrayOfObj[i].attachment_1}</td>
                <td>{arrayOfObj[i].attachment_2}</td>
                <td>{arrayOfObj[i].attachment_3}</td>
                <td>{arrayOfObj[i].bonus}</td>
            </tr>
        )
    }

    return (
        <Container>
            <h2 id="top-of-page">Table Results</h2>
            <table>
                <tbody>
                    {returnData}
                </tbody>
            </table>
            <a href="#top-of-page">Return to the top</a>
        </Container>
    );
}

export default BuildHtmlTable;