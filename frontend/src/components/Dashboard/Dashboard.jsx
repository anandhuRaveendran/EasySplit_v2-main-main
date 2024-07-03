import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';
import Home from '../Dashpages/User/home';
import Profile from '../Dashpages/User/profile';
import Groups from '../Dashpages/Group/groups';
import Friends from '../Dashpages/Friends/friends';
import Expenses from '../Dashpages/Friends/ExpensesFriend';
import Settings from '../Dashpages/User/settings';
import AddFriend from '../Dashpages/Friends/addfriend';
import ExpenseGroup from '../Dashpages/Group/expenseGroup';
import FriendProfile from '../Dashpages/Friends/profile';
import Groupprofile from '../Dashpages/Group/profile';
import UpdateFriend from '../Dashpages/Friends/updateFriends';
import AddGroup from '../Dashpages/Group/addGroup'; 
import UpdateGroup from '../Dashpages/Group/updateGroup';

const Dashboard = () => {
  return (
    <div className='bg-black text-white'>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="ml-[16.5%] mr-[0.8%] mt-3 p-4 w-screen h-[803.5px] bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/getfriends" element={<Friends />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/addfriend" element={<AddFriend />} />
            <Route path="/expensesgroup" element={<ExpenseGroup />} />
            <Route path="/friendprofile/:id" element={<FriendProfile />} />
            <Route path="/groupprofile/:id" element={<Groupprofile />} />
            <Route path="/updateFriend/:id" element={<UpdateFriend />} />
            <Route path="/updateGroup/:id" element={<UpdateGroup />} /> {/* Route for updating a group */}
            <Route path="/addGroup" element={<AddGroup />} /> {/* Route for adding a new group */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
