import HeaderDropdown from "./header-dropdown/HeaderDropdown";
import "./header.css"
import intersection from "../../assets/header/intersection.png"
import magnifying from "../../assets/header/magnifying.png"
import notification from "../../assets/header/notification.png"
import question from "../../assets/header/question.png"

const Header = () => {
    return <>
        <header className="w-screen h-16 bg-white text-black flex items-center justify-between px-4">
            {/* Left section */}
            <div className="left-header flex items-center gap-6">
                <HeaderDropdown />
                <div className="flex items-center gap-2">
                    <img src={intersection} className="w-5 h-5" alt="Integrations Icon" />
                    <span className="text-xl font-bold">Integrations</span>
                </div>
            </div>

            {/* Right section */}
            <div className="right-header flex items-center gap-6">
                <div className="bg-gray-100 rounded-full p-2">
                    <img src={magnifying} alt="Search" className="w-5 h-5 cursor-pointer" />
                </div>
                <div className="relative bg-gray-100 rounded-full p-2">
                    <img src={notification} alt="Notifications" className="w-5 h-5 cursor-pointer" />
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                        3
                    </span>
                </div>
                <div className="bg-gray-100 rounded-full p-2">
                    <img src={question} alt="Help" className="w-5 h-5 cursor-pointer" />
                </div>
                <div>
                    <button className="bg-blue-600 text-white text-sm font-bold px-2.5 py-2 rounded-md">
                        JA
                    </button>
                </div>
            </div>
        </header>
    </>
}

export default Header;