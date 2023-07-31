import React, { useEffect, useState } from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
  import { useAppDispatch, useAppSelector } from '../../logic/store/store';
import { getUser, logout } from '../../logic/store/features/authSlice';
import { useNavigate } from 'react-router-dom';
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    url: ""
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    url: ""
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    url: ""
  },
];

const profileMenuItemsNotSignedIn = [
  {
    label: "Connexion",
    icon: UserCircleIcon,
    url: "/login"
  },
  {
    label: "Inscription",
    icon: Cog6ToothIcon,
    url: "/register"
  },
];
 
function ProfileMenu() {
  const user = useAppSelector(getUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [usedMenu, setusedMenu] = useState(profileMenuItemsNotSignedIn);

  useEffect(() => {
   if (!user) {
    setusedMenu(profileMenuItemsNotSignedIn);
   } else {
    setusedMenu(profileMenuItems);
   }
  }, [user]);


  const handleNavigation = (url: string, label: string) => {
    if (label === "Sign Out") {
      disconnectUser();
    } else {
      navigate(url);      
    }
  } 

  const disconnectUser = () => {
    dispatch(logout());
  }
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-blue-500 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        <h2>{user?.firstname}</h2>
        {usedMenu.map(({ label, icon, url }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleNavigation(url, label) }
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
export function AppNavbar() {
 
  return (
    <Navbar 
      className="mx-auto max-w-screen-xl from-blue-gray-900 to-blue-gray-800 px-4 py-3 lg:rounded-full lg:pl-6" 
      variant="gradient"
      color="blue-gray"
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-white"
        >
          Material Tailwind
        </Typography>
        <ProfileMenu />
      </div>
    </Navbar>
  );
}

export default AppNavbar

