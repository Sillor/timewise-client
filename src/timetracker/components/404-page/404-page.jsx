import BrokenRobot from '../assets/broken.png'
export default function PageNotFound() {
    return (
        <div className="min-h-screen bg-gray-900 text-white">
            <div className="flex flex-col items-center">
                <h1 className="text-[48px] font-bold mt-[59px] mb-[36px]">404 Page Not Found</h1>
                <img src={BrokenRobot}/>
                <h2>Looks like we hit a snag!</h2>
            </div>
        </div>
    );
}