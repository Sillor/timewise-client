import './TimesheetMain.css';
import EntryItem from '../../components/entry-item-component/EntryItem';

function TimesheetMain() {
    return (
        <div className='border flex flex-col content-center'>
            <h1 className='text-center text-4xl font-semibold py-10 drop-shadow-md'>Time Tracker</h1>
            <div className='border mx-auto w-4/5 md:w-2/5 mb-5 text-center p-5'>
                Placeholder for time input
            </div>           
            <div>
                {
                dummyData.map((value) => {
                    return <EntryItem props={value} key={value.key}/>
                })
                }
            </div>
        </div>
    )
}

export default TimesheetMain;

const dummyData = [{
    key: 11111111,
    date: '1/1/2022',
    project: 'Project 1',
    hours: '10:00am - 1:00pm',
    description: 'Worked on feature 1',
    groupName: 'Cohort 444'
},
{
    key: 11111112,
    date: '5/1/2023',
    project: 'Project 2',
    hours: '6:00pm - 9:00pm',
    description: 'Worked on feature 21',
    groupName: 'Cohort 444'
},
{
    key: 11111113,
    date: '10/1/2023',
    project: 'Project 4',
    hours: '1400 - 1700',
    description: 'Worked on feature 3',
    groupName: 'Cohort 444'
}]