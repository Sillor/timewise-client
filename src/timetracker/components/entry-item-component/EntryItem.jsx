/* eslint-disable react/prop-types */
//create function that pushes or removes data from array
//create function that when you click on the time, then you 
//can change it, if time is not inputted, then do not change

//overflow scroll or pagination -> set max height?
import TrashIcon from "../../assets/TrashIcon"

const EntryItem = ({ props, deleteFn }) => {
    const {Description, Project, Hours, Date, id } = props
    return (
        <table className='w-full max-w-[95%] md:w-full mx-auto my-3 bg-darkBlue rounded-md'>
            <tbody>
                <tr>
                    <td className="px-3 pt-3">
                        <h2 className="text-2xl font-bold">{Date}</h2>
                    </td>
                    <td align="right" className="p-3  ">
                    <span className=" sm:w-[1.2rem] sm:h-[1.2rem]">
                            <TrashIcon 
                                className="hover:cursor-pointer w-7 h-7 lg:w-8 lg:h-8"
                                onClick={() => deleteFn(id)}
                            />
                        </span>
                    </td>
                </tr>
                <tr>
                    <td className="px-3 text-xl font-medium"> 
                        <span>{Hours}</span>
                    </td>
                </tr>
                <tr>
                    <td className="px-3 max-w-4 h-min text-xl font-medium">
                        <span>{Description}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                    </td>
                    <td align="right" className="px-3 pb-1 font-medium">
                        {Project}
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default EntryItem
