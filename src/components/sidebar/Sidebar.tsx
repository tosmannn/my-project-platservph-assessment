import logo from "../../assets/Logo.png"

import insight from "../../assets/sidebar/insights.png";
import collect from "../../assets/sidebar/collect.png";
import review from "../../assets/sidebar/reviews.png";
import carbon from "../../assets/sidebar/carbon.png";
import utility from "../../assets/sidebar/utilities.png";
import report from "../../assets/sidebar/reports.png";
import action from "../../assets/sidebar/actions.png";
import setting from "../../assets/sidebar/settings.png";
import './sidebar.css'

const navItems = [
    { icon: insight, label: "Insights", href: "/insights" },
    { icon: collect, label: "Collect", href: "/collect" },
    { icon: review, label: "Reviews", href: "/reviews" },
    { icon: carbon, label: "Carbon", href: "/carbon" },
    { icon: utility, label: "Utilities", href: "/utilities" },
    { icon: report, label: "Reports", href: "/reports" },
    { icon: action, label: "Actions", href: "/actions" },
];

const Sidebar = () => {
    return <>
        <aside className="sidebar w-16 h-screen flex flex-col text-white">
            <div className="sidebar-header flex items-center justify-center mt-4">
                <img src={logo}
                    alt='Company Logo'
                />
            </div>

            <nav className="sidebar-nav flex-1 flex items-center justify-center" aria-label="Main navigation">
                <ul>
                    {navItems.map(({ icon, label, href }) => (
                        <li key={label} className="flex flex-col items-center justify-center">
                            <a href={href} className="flex flex-col items-center justify-center">
                                <img
                                    src={icon}
                                    alt={`${label} Icon`}
                                    className="filter invert mt-2 w-5 h-5"
                                />
                                <span className="text-sm">{label}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            <footer className="flex flex-col items-center justify-center mb-4">
                <a href="/settings/integrations" className="flex flex-col items-center justify-center">
                    <img
                        src={setting}
                        alt="Settings Icon"
                        className="filter invert w-5 h-5 mb-1"
                    />
                    <span className="text-sm">Settings</span>
                </a>
            </footer>
        </aside>
    </>
}

export default Sidebar;