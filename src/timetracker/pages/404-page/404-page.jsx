import BrokenRobot from '../../assets/broken.png'
export default function PageNotFound() {
    return (
        <div className="min-h-screen body text-white">
            <div className="flex flex-col items-center">
                <h1 className="text-[2rem] font-bold mt-[3rem] mb-[1rem] ">404 Page Not Found</h1>
                <img className='py-10' src={BrokenRobot}/>
                <p className='text-xl'>Looks like we hit a snag!</p>
            </div>
        </div>
    );
}