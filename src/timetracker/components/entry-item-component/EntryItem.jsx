/* eslint-disable react/prop-types */
//create function that pushes or removes data from array
//create function that when you click on the time, then you 
//can change it, if time is not inputted, then do not change

//overflow scroll or pagination -> set max height?
import TrashIcon from "../../assets/TrashIcon"

const EntryItem = ({ props, deleteFn }) => {
    const {Description, Project, Hours, Date, id } = props
    return (
        <table className='w-11/12 md:w-full mx-auto my-3 bg-darkBlue rounded-md'>
            <tbody>
                <tr>
                    <td className="px-3 pt-3">
                        <span>{Date}</span>
                    </td>
                    <td align="right" className="p-3  ">
                    <span className="w-[1.2rem] h-[1.2rem]">
                            <TrashIcon 
                                className="hover:cursor-pointer w-[1.2rem] h-[1.2rem]"
                                onClick={() => deleteFn(id)}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="px-3"> 
                        <span>{Hours}</span>
                    </td>
                </tr>
                <tr>
                    <td className="px-3">
                        <span>{Description}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td align="right" className="px-3 pb-1">
                        {Project}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EntryItem
