import "./landing-navbar.css";
import Logo from '../assets/logo.png'

export default function LandingNavbar() {
    return (
    <nav className="NavBar w-screen overflow-hidden shadow mx-auto ">           
        <div className="NavBar-items w-full py-4 px-2">
            <img src={Logo}/>
            <h1>TimeWise</h1>
        </div>
    </nav>
    );
}