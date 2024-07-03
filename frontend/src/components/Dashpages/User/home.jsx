import React from 'react';
import Graph from '../charts/chart'

const DashboardHome = () => {
  return (
    <div className="p-4">
      <div className="gap-[5%] flex mb-4">
        <div className="w-[295px] h-[120px] border-white border bg-gray-900 text-center pt-4 mb-4">
          <h1 className="text-xl font-bold text-white">Total Expenses</h1>
          <h1 className="text-green-500 text-2xl mt-5">$0</h1>
        </div>

        <div className="w-[295px] h-[120px] border-white border bg-gray-900 text-center pt-4 mb-4 ">
          <h1 className="text-xl font-bold text-white">You Owe</h1>
          <h1 className="text-green-500 text-2xl mt-5">$0</h1>
        </div>

        <div className="w-[295px] h-[120px] bg-gray-900 border-white border text-center pt-4 mb-4 ">
          <h1 className="text-xl font-bold text-white">You are Owed</h1>
          <h1 className="text-green-500 text-2xl mt-5">$0</h1>
        </div>

        <div className="w-[295px] h-[120px] bg-gray-900 border-white border text-center pt-4 mb-4">
          <h1 className="text-xl font-bold text-white">Groups</h1>
          <h1 className="text-green-500 text-2xl mt-5">0</h1>
        </div>

        <div className="w-[295px] h-[120px] bg-gray-900 border-white border text-center pt-4 mb-4 ">
          <h1 className="text-xl font-bold text-white">Friends</h1>
          <h1 className="text-green-500 text-2xl mt-5">0</h1>
        </div>
        
      </div>
      <div className='flex mt-[3%]'>
        <div className='flex-col'>
          <div className='w-[700px] h-[200px]'>
            <Graph/>
          </div>
          <div className='w-[800px] h-[300px] border mt-[27%]'>
                gojth
          </div>
        </div>
        <div className='ml-[15%]'>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-4 text-black">Recent activity</h2>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <p className="text-gray-800">You created the group <span className="font-medium text-blue-600">“Thodupuzha”</span>.</p>
          <p className="text-gray-500 text-sm">Today</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <p className="text-gray-800">You paid <span className="font-medium text-blue-600">ff</span> in <span className="font-medium text-blue-600">“rr”</span>.</p>
          <p className="text-gray-800">You paid <span className="font-medium">$20.00</span></p>
          <p className="text-gray-500 text-sm">Today</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <p className="text-gray-800">You recorded a payment from <span className="font-medium text-blue-600">ff</span> in <span className="font-medium text-blue-600">“rr”</span>.</p>
          <p className="text-gray-800">You received <span className="font-medium">$1.00</span></p>
          <p className="text-gray-500 text-sm">Today</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <p className="text-gray-800">You paid <span className="font-medium text-blue-600">ff</span> in <span className="font-medium text-blue-600">“rr”</span>.</p>
          <p className="text-gray-800">You paid <span className="font-medium">$1.00</span></p>
          <p className="text-gray-500 text-sm">Today</p>
        </div>

        <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
          <p className="text-gray-800">You created the group <span className="font-medium text-blue-600">“rr”</span>.</p>
          <p className="text-gray-500 text-sm">Today</p>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          Show more
        </button>
      </div>
        </div>
      </div>

     

      
    </div>
  );
};

export default DashboardHome;
