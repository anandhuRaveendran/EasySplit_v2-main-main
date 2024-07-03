import React from 'react';

const GroupProfile = () => {
  return (
    <div className="p-4">
      <div className="gap-[5%] flex mb-4">
        <div className="w-[295px] h-[120px] border-white border bg-gray-900 text-center pt-4 mb-4">
          <h1 className="text-xl font-bold text-white">Total Expenses</h1>
          <h1 className="text-green-500 text-2xl mt-5">$100</h1>
        </div>

        <div className="w-[295px] h-[120px] border-white border bg-gray-900 text-center pt-4 mb-4 ">
          <h1 className="text-xl font-bold text-white">You Owe</h1>
          <h1 className="text-green-500 text-2xl mt-5">$100</h1>
        </div>

        <div className="w-[295px] h-[120px] bg-gray-900 border-white border text-center pt-4 mb-4 ">
          <h1 className="text-xl font-bold text-white">You are Owed</h1>
          <h1 className="text-green-500 text-2xl mt-5">$100</h1>
        </div>

        <div className="w-[295px] h-[120px] bg-gray-900 border-white border text-center pt-4 mb-4">
          <h1 className="text-xl font-bold text-white">Groups</h1>
          <h1 className="text-green-500 text-2xl mt-5">$100</h1>
        </div>

        <div className="w-[295px] h-[120px] bg-gray-900 border-white border text-center pt-4 mb-4 ">
          <h1 className="text-xl font-bold text-white">Friends</h1>
          <h1 className="text-green-500 text-2xl mt-5">$100</h1>
        </div>
        
      </div>

     

      
    </div>
  );
};

export default GroupProfile;
