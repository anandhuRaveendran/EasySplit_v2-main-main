import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { MdGroups } from "react-icons/md";
import { FaUserFriends, FaPowerOff } from "react-icons/fa";
import { GrMoney, GrUserSettings } from "react-icons/gr";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Sidebar = () => {
  const [isGroupsOpen, setIsGroupsOpen] = useState(false);
  const [isFriendsOpen, setIsFriendsOpen] = useState(false);
  const [isExpensesOpen, setIsExpensesOpen] = useState(false);

  const toggleGroups = () => setIsGroupsOpen(!isGroupsOpen);
  const toggleFriends = () => setIsFriendsOpen(!isFriendsOpen);
  const toggleExpense = () => setIsExpensesOpen(!isExpensesOpen);

  return (
    <div className="fixed top-25 left-0 h-full w-72 pl-5 bg-gray-900 text-white p-4 mt-3">
      <ul>
        <li className="mb-4 flex items-center w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray]">
          <Link to="/dashboard/" className="flex items-center w-[">
            <CgProfile className="mr-5 text-2xl hover:text-gray-300" />
            <h1 className='text-xl'>Dashboard Home</h1>
          </Link>
        </li>
        <li className="mb-4 flex items-center  w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray]">
          <Link to="/dashboard/profile" className="flex items-center hover:text-gray-300">
            <CgProfile className="mr-5 text-2xl hover:text-gray-300" />
            <h1 className='text-xl'>User Profile</h1>
          </Link>
        </li>
        <li className="mb-4 flex flex-col  ">
          <div className="flex items-center hover:text-gray-300 w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray]" onClick={toggleFriends}>
            <FaUserFriends className="mr-5 text-2xl hover:text-gray-300" />
            <h1 className='text-xl'>Friends</h1>
            {isFriendsOpen ? <IoIosArrowUp className="ml-auto" /> : <IoIosArrowDown className="ml-auto" />}
          </div>
          {isFriendsOpen && (
            <ul className="pl-6 mt-2">
              {/* <li className="mb-2">
                <Link to="/dashboard/friendprofile" className="flex items-center hover:text-gray-300 text-xl ml-10 mt-3">
                  Profile
                </Link>
              </li> */}
              <li className="mb-2 hover:bg-gray-700">
                <Link to="/dashboard/addfriend" className="flex items-center hover:text-gray-300 text-xl ml-10 mt-3">
                  Add Friend
                </Link>
              </li>
              <li className="mb-2 hover:bg-gray-700">
                <Link to="/dashboard/getfriends" className="flex items-center hover:text-gray-300 text-xl ml-10 mt-3">
                  Friends List
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4 flex flex-col hover:bg-gray-700">
          <div className="flex items-center hover:text-gray-300 w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray]" onClick={toggleGroups}>
            <MdGroups className="mr-5 text-2xl hover:text-gray-300" />
            <h1 className='text-xl'>Groups</h1>
            {isGroupsOpen ? <IoIosArrowUp className="ml-auto" /> : <IoIosArrowDown className="ml-auto" />}
          </div>
          {isGroupsOpen && (
            <ul className="pl-6 mt-2">
              {/* <li className="mb-2 hover:bg-gray-700">
                <Link to="/dashboard/groupprofile" className="flex items-center hover:text-gray-300 text-xl ml-10 mt-3">
                  Profile
                </Link>
              </li> */}
              <li className="mb-2 hover:bg-gray-700">
                <Link to="/dashboard/addgroup" className="flex items-center hover:text-gray-300 text-xl ml-10 mt-3">
                  Add Group
                </Link>
              </li>
              <li className="mb-2 hover:bg-gray-700">
                <Link to="/dashboard/groups" className="flex items-center hover:text-gray-300 text-xl ml-10 mt-3">
                  Groups List
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="mb-4 flex flex-col hover:bg-gray-700">
          <div className="flex items-center hover:text-gray-300 w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray]" onClick={toggleExpense}>
            <GrMoney className="mr-5 text-2xl hover:text-gray-300" />
            <h1 className='text-xl'>Expenses</h1>
            {isExpensesOpen ? <IoIosArrowUp className="ml-auto" /> : <IoIosArrowDown className="ml-auto" />}
          </div>
          {isExpensesOpen && (
            <ul className="pl-6 mt-2">
              <li className="mb-2 hover:bg-gray-700 text-xl ml-10 mt-3">
                <Link to="/dashboard/expenses" className="flex items-center hover:text-gray-300">
                  Friends
                </Link>
              </li>
              <li className=" hover:bg-gray-700 text-xl ml-10 mt-3 mb-[2%]">
                <Link to="/dashboard/expensesgroup" className="flex items-center hover:text-gray-300">
                  Group
                </Link>
              </li>
            </ul>
          )}
        </li>
        <hr className='mb-[4%] mt-[4%]'/>
        <li className="mb-4 flex items-center  w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray] mt-[12%]">
          <Link to="/dashboard/settings" className="flex items-center hover:text-gray-300">
            <GrUserSettings className="mr-4 hover:text-gray-300 text-2xl" />
            <h1 className='text-xl'>Settings</h1>
          </Link>
        </li>
        <li className="mb-4 flex items-center w-[250px] pl-5 pt-1 pb-1 hover:bg-[gray]">
          <Link to="/" className="flex items-center hover:text-gray-300">
            <FaPowerOff className="mr-5 hover:text-gray-300 text-2xl" />
            <h1 className='text-xl'>Logout</h1>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
