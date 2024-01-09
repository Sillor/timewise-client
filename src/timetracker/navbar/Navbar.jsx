import "./Navbar.css";

import React from 'react';

function Navbar() {
    // Function to toggle the sidebar
    const toggleSidebar = () => {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('-translate-x-full');
    };

    // Function to close the sidebar if clicked outside
    const closeSidebar = (e) => {
        const sidebar = document.getElementById('sidebar');
        if (!sidebar.contains(e.target) && !e.target.matches('#open-sidebar')) {
            sidebar.classList.add('-translate-x-full');
        }
    };

    React.useEffect(() => {
        document.addEventListener('click', closeSidebar);
        return () => document.removeEventListener('click', closeSidebar);
    }, []);

    return (
        <div className="bg-gray-100">
            <div className="h-screen flex overflow-hidden bg-gray-200">
                {/* Sidebar */}
                <div id="sidebar" className="absolute bg-gray-800 text-white w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold">Sidebar</h1>
                        <ul className="mt-4">
                            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Time Tracker</a></li>
                            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Projects</a></li>
                            <li className="mb-2"><a href="#" className="block hover:text-indigo-400">Users</a></li>
                        </ul>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col overflow-hidden">
                    {/* Navbar */}
                    <div className="bg-white shadow">
                        <div className="container mx-auto">
                            <div className="flex justify-between items-center py-4 px-2">
                                <h1 className="text-xl font-semibold">Animated Drawer</h1>
                                <button className="text-gray-500 hover:text-gray-600" id="open-sidebar" onClick={toggleSidebar}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Content Body */}
                    <div className="flex-1 overflow-auto p-4">
                        <h1 className="text-2xl font-semibold">Timesheet</h1>
                        <p>... Content goes here ...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;