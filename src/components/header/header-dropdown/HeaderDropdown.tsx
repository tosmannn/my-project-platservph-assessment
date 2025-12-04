
import { useState, useRef, useEffect } from "react";
import downArrow from "../../../assets/header/down-arrow.png"
import upArrow from "../../../assets/header/up-arrow.png"
import magnifying from "../../../assets/header/magnifying.png"

const organizations = [
    { initials: "AL", name: "Adhesif Labels Ltd" },
    { initials: "AS", name: "AIA Services New Zealand Limited" },
    { initials: "AN", name: "Air New Zealand Ltd" },
    { initials: "AB", name: "All Blacks Organization" },
    { initials: "AH", name: "All Hands Demo Limited" },
];

const HeaderDropdown = () => {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);
    const filteredOrgs = organizations.filter(org =>
        org.name.toLowerCase().includes(search.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    
    return (
        <div ref={dropdownRef} className="relative inline-block text-left w-64">
            <button
                onClick={() => setOpen(!open)}
                className="w-full px-4 py-2 bg-white text-black rounded-md shadow flex justify-between items-center"
            >
                ABC Group Ltd

                <img
                    src={open ? upArrow : downArrow}
                    alt="Toggle Dropdown"
                    className="w-4 h-4 ml-2"
                />
            </button>

            {open && (
                <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="px-4 py-2 border-b">
                        <a href="#" className="block text-sm text-gray-700 hover:text-blue-600">Help & Guides</a>
                        <a href="#" className="block text-sm text-gray-700 hover:text-blue-600">Terms of Use</a>
                        <a href="#" className="block text-sm text-gray-700 hover:text-blue-600">Privacy Policy</a>
                    </div>

                    <div className="px-4 py-2 border-b bg-gray-100">
                        <input
                            type="text"
                            placeholder="Type to filter..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full px-2 py-1 border rounded text-sm bg-white"
                        />

                        <img
                            src={magnifying}
                            alt="search"
                            className="absolute right-6 top-1/3 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>

                    <ul className="max-h-60 overflow-y-auto px-2 py-2">
                        {filteredOrgs.map(org => (
                            <li key={org.initials} className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">
                                <span className="bg-blue-500 text-white rounded-md w-6 h-6 flex items-center justify-center text-xs font-bold">
                                    {org.initials}
                                </span>
                                <span className="text-sm text-gray-800 truncate">{org.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default HeaderDropdown;