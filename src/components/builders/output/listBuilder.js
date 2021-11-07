/* ----------------------------------------------------------------------------
 * Builds and returns a html ordered list of combinations.
 * @params {arrayOfObj} array
*/
const BuildHtmlList = ({arrayOfObj}) => {
    let returnData = [];

    // Loop through arrayOfObj indexes
    for (let i = 0; i < arrayOfObj.length; i++){
        returnData.push(
            <li key={i}>
                <b>Blaster</b> : <i>{arrayOfObj[i].blaster}</i><br/>
                <b>Background</b> : <i>{arrayOfObj[i].background}</i><br/>
                <b>Optics</b> : <i>{arrayOfObj[i].optics}</i><br/>
                <b>Finish</b> : <i>{arrayOfObj[i].finish}</i><br/>
                <b>Magazine</b> : <i>{arrayOfObj[i].magazine}</i><br/>
                <b>Stock</b> : <i>{arrayOfObj[i].stock}</i><br/>
                <b>Muzzle</b> : <i>{arrayOfObj[i].muzzle}</i><br/>
                <b>Attachment_1</b> : <i>{arrayOfObj[i].attachment_1}</i><br/>
                <b>Attachment_2</b> : <i>{arrayOfObj[i].attachment_2}</i><br/>
                <b>Attachment_3</b> : <i>{arrayOfObj[i].attachment_3}</i><br/>
                <b>Bonus</b> : <i>{arrayOfObj[i].bonus}</i><br/>
            </li>
        )
    }

    return (
        <div>
            <ol>
                {returnData}
            </ol>
        </div>
    );
}

export default BuildHtmlList;