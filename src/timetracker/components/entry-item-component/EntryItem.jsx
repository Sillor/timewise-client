/* eslint-disable react/prop-types */
//create function that pushes or removes data from array
//create function that when you click on the time, then you 
//can change it, if time is not inputted, then do not change

const EntryItem = ({ props }) => {
    const {date, hours, description, groupName} = props
    return (
        <table className='w-4/5 md:w-2/5 mx-auto my-3 bg-darkBlue rounded-md'>
            <tbody>
                <tr>
                    <td className="px-3 pt-3">
                        <span>{date}</span>
                    </td>
                    <td align="right" className="px-3">
                        <span>Trash Can</span>
                    </td>
                </tr>
                <tr>
                    <td className="px-3"> 
                        <span>{hours}</span>
                    </td>
                </tr>
                <tr>
                    <td className="px-3">
                        <span>{description}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td align="right" className="px-3 pb-1">
                        {groupName}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EntryItem
