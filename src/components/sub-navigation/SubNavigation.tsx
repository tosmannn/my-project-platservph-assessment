import {
    Cog8ToothIcon,
    Square2StackIcon,
    ClipboardIcon,
    TvIcon
} from "@heroicons/react/24/outline";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faUsers,
    faTags,
    faGear,
    faSitemap,
    faBuilding,
    faCloud,
    faCamera

} from "@fortawesome/free-solid-svg-icons";

interface SubNavItem {
    label: string;
    icon: React.ElementType | any;
    isFontAwesome?: boolean;
    active?: boolean;
    color?: string;
}
interface SubNavSection {
    label: string;
    items: SubNavItem[];
}

const subNavItems: SubNavSection[] = [
    {
        label: "Organisation",
        items: [
            { label: "Manage", icon: faHouse, isFontAwesome: true, color: "text-green-600" },
            { label: "Users", icon: faUsers, isFontAwesome: true, color: "text-green-600" },
            { label: "Tags", icon: faTags, isFontAwesome: true, color: "text-green-600" },
            { label: "Integrations", icon: Square2StackIcon, active: true, color: "text-green-600" },
        ],
    },
    {
        label: "Utilities",
        items: [
            { label: "Configuration", icon: faGear, isFontAwesome: true, color: "text-green-600" },
            { label: "Hierarchy", icon: faSitemap,isFontAwesome: true, color: "text-green-600" },
            { label: "Assets", icon: faBuilding, isFontAwesome: true, color: "text-green-600" },
        ],
    },
    {
        label: "Carbon",
        items: [
            { label: "Configuration", icon: Cog8ToothIcon, color: "text-green-600" },
            { label: "Hierarchy", icon: faSitemap, isFontAwesome: true, color: "text-green-600" },
            { label: "Inventory Items", icon: ClipboardIcon, color: "text-green-600" },
            { label: "Emission Factors", icon: faCloud, isFontAwesome: true, color: "text-green-600" },
            { label: "Snapshots", icon: faCamera, isFontAwesome: true, color: "text-gray-400" },
        ],
    },
    {
        label: "Displays",
        items: [
            { label: "Manage", icon: TvIcon, color: "text-green-600" },
        ],
    },
];

const SubNavigation = () => {
    return <>
        <div className="space-y-6 text-sm text-black w-67">
            {subNavItems.map((section) => (
                <div key={section.label}>

                    <h3 className="ml-2 mb-2 font-semibold text-gray-700 text-xs">
                        {section.label}
                    </h3>

                    <ul className="ml-4 space-y-1">
                        {section.items.map((item) => (
                            <li
                                key={item.label}
                                className={`flex items-center gap-2 cursor-pointer px-2 py-1 rounded ${item.active ? "bg-green-600 text-white" : "hover:bg-green-100 hover:text-green-600"
                                    }`}
                            >
                                {item.isFontAwesome ? (
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className={`w-5 h-5 ${item.active ? "text-white" : item.color ?? "text-green-600"}`}
                                    />
                                ) : (
                                    <item.icon
                                        className={`w-5 h-5 ${item.active ? "text-white" : item.color ?? "text-green-600"}`}
                                    />
                                )}
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    </>
}


export default SubNavigation;