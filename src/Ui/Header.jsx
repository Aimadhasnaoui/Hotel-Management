import styled from "styled-components";
import HomeIcon from '@mui/icons-material/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BedroomParentIcon from '@mui/icons-material/BedroomParent';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import logo from '../assets/logo-dark.png';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Text = styled.div`
       font-size: 20px;
       color: ${(props) => (props.active ? 'blue' : 'white')};
       text-align: center;
       margin-bottom: 10px;
       padding: 10px;
       display: flex;
       align-items: center;
       gap: 20px;
       cursor: pointer;
       border-radius: 7px;
       transition: background-color 0.3s ease-in-out;
       &:hover {
           background-color: #18212f;
           transition: background-color 0.3s ease-in-out;
       }
   `;

export default function Header({ Menu }) {
    const [currentRoute, setCurrentRoute] = useState('');
    const route = useLocation();

    useEffect(() => {
        setCurrentRoute(route.pathname);
    }, [route]);

    const handleLinkClick = (link) => {
        setCurrentRoute(link);
    };

    return (
        <div className="h-screen w-full bg-[#1f2937] px-4 border-r-[1px] border-gray-500">
            {
                !Menu && (
                    <>
                        <img src={logo} alt="logo" className="w-[120px] py-11 mx-auto" />
                        <Link to="/" onClick={() => handleLinkClick('/')}>
                            <Text className={`group ${currentRoute === '/' ? "bg-[#18212f]" : ""}`}>
                                <HomeIcon className={` group-hover:text-blue-600 ${currentRoute === '/' ? "text-blue-600" : "text-gray-400"}`} />
                                Home
                            </Text>
                        </Link>
                        <Link to="/bookings" onClick={() => handleLinkClick('/bookings')}>
                            <Text className={`group ${currentRoute === '/bookings' ? "bg-[#18212f]" : ""}`}>
                                <CalendarMonthIcon className={` group-hover:text-blue-600 ${currentRoute === '/bookings' ? "text-blue-600" : "text-gray-400"}`} />
                                Bookings
                            </Text>
                        </Link>
                        <Link to="/cabins" onClick={() => handleLinkClick('/cabins')}>
                            <Text className={`group ${currentRoute === '/cabins' ? "bg-[#18212f]" : ""}`}>
                                <BedroomParentIcon className={` group-hover:text-blue-600 ${currentRoute === '/cabins' ? "text-blue-600" : "text-gray-400"}`} />
                                Cabins
                            </Text>
                        </Link>
                        <Link to="/users" onClick={() => handleLinkClick('/users')}>
                            <Text className={`group ${currentRoute === '/users' ? "bg-[#18212f]" : ""}`}>
                                <GroupIcon className={` group-hover:text-blue-600 ${currentRoute === '/users' ? "text-blue-600" : "text-gray-400"}`} />
                                Users
                            </Text>
                        </Link>
                        <Link to="/settings" onClick={() => handleLinkClick('/settings')}>
                            <Text className={`group ${currentRoute === '/settings' ? "bg-[#18212f]" : ""}`}>
                                <SettingsIcon className={` group-hover:text-blue-600 group-focus:text-blue-600 ${currentRoute === '/settings' ? "text-blue-600" : "text-gray-400"}`} />
                                Settings
                            </Text>
                        </Link>
                    </>
                )
            }
            {
                Menu && (
                    <>
                        <img src={logo} alt="logo" className="w-[120px] py-11 mx-auto" />
                        <Link to="/" onClick={() => handleLinkClick('/')}>
                            <Text className={`group justify-center ${currentRoute === '/' ? "bg-[#18212f]" : ""}`}>
                                <HomeIcon className={` group-hover:text-blue-600 ${currentRoute === '/' ? "text-blue-600" : "text-gray-400"}`} />
                            </Text>
                        </Link>
                        <Link to="/bookings" onClick={() => handleLinkClick('/bookings')}>
                            <Text className={`group justify-center ${currentRoute === '/bookings' ? "bg-[#18212f]" : ""}`}>
                                <CalendarMonthIcon className={` group-hover:text-blue-600 ${currentRoute === '/bookings' ? "text-blue-600" : "text-gray-400"}`} />
                            </Text>
                        </Link>
                        <Link to="/cabins" onClick={() => handleLinkClick('/cabins')}>
                            <Text className={`group justify-center ${currentRoute === '/cabins' ? "bg-[#18212f]" : ""}`}>
                                <BedroomParentIcon className={` group-hover:text-blue-600 ${currentRoute === '/cabins' ? "text-blue-600" : "text-gray-400"}`} />
                            </Text>
                        </Link>
                        <Link to="/users" onClick={() => handleLinkClick('/users')}>
                            <Text className={`group justify-center ${currentRoute === '/users' ? "bg-[#18212f]" : ""}`}>
                                <GroupIcon className={` group-hover:text-blue-600 ${currentRoute === '/users' ? "text-blue-600" : "text-gray-400"}`} />
                            </Text>
                        </Link>
                        <Link to="/settings" onClick={() => handleLinkClick('/settings')}>
                            <Text active={currentRoute === '/settings'} className={`justify-center group ${currentRoute === '/settings' ? "bg-[#18212f]" : ""}`}>
                                <SettingsIcon className={`group-hover:text-blue-600 ${currentRoute === '/settings' ? "text-blue-600" : "text-gray-400"}`} />
                            </Text>
                        </Link>
                    </>
                )
            }
        </div>
    );
}