///Made by Alisson Ross 1/26/24
import Button from "../../components/button-component/Button";
import { authData } from "../../utils/authHandler";
import AvatarIcon from "../../assets/AvatarIcon";
import { Link } from "react-router-dom";
export default function AccountPage() {
    return (
       
        <div className="flex flex-col items-center pt-24">
            <h1 className="max-w-[262px] md:max-w-[512px] text-[3em] font-bold text-light mb-8">
                Account
            </h1>
            <AvatarIcon className="w-20  text-primary pb-5" />
           
            <div className="flex flex-col items-center text-lg pb-5">Email: <p/> {authData.email}</div>
            <Button className="mt-4 h-12 w-[242px] font-semibold">
                <Link to='/request-password-reset'>Reset Account Password</Link>
            </Button>
        </div>
    );
  }