import React from 'react';
import './App.css';
import Users from './components/Users';

// function App() {
//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
//       <h1 className="text-4xl font-bold">Hello TimeWise!</h1>
//     </div>
//   );
// }

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Users />
    </div>
  )
}

export default App;
