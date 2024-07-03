import React, { useState, useEffect } from 'react';

const GroupExpense = () => {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [members, setMembers] = useState([]);
  const [amount, setAmount] = useState('');
  const [splitType, setSplitType] = useState('equal');
  const [splitAmounts, setSplitAmounts] = useState({});
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/group/getGroups');
        const data = await res.json();
        setGroups(data);
      } catch (error) {
        console.error('Error fetching groups:', error);
      }
    };
    fetchGroups();
  }, []);

  useEffect(() => {
    if (selectedGroup) {
      const fetchMembers = async () => {
        try {
          const res = await fetch(`http://localhost:5000/api/group/getgroup/${selectedGroup}`);
          const data = await res.json();
          setMembers(data.members);
        } catch (error) {
          console.error('Error fetching members:', error);
        }
      };
      fetchMembers();
    }
  }, [selectedGroup]);

  const handleSplitTypeChange = (type) => {
    setSplitType(type);
    if (type === 'equal') {
      const split = amount / members.length;
      const splitAmountsObj = members.reduce((acc, member) => {
        acc[member._id] = split;
        return acc;
      }, {});
      setSplitAmounts(splitAmountsObj);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    if (splitType === 'equal') {
      const split = e.target.value / members.length;
      const splitAmountsObj = members.reduce((acc, member) => {
        acc[member._id] = split;
        return acc;
      }, {});
      setSplitAmounts(splitAmountsObj);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleMemberAmountChange = (id, value) => {
    setSplitAmounts((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <div className='flex justify-between'>
      <div>
        <div className="w-[700px]  p-6 bg-gray-900 border-2 border-white rounded-md shadow-md">
          <header className="text-center">
            <h1 className="text-2xl text-white font-bold mb-[3%]">Group Expense</h1>
          </header>

          <div className="mb-6">
            <label htmlFor="category" className="block mb-2 text-sm font-medium text-white">Category</label>
            <input
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-white">Description</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className='flex'>
            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Enter Money</label>
            <input
              type="text"
              id="amount"
              value={amount}
              onChange={handleAmountChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[100px] p-2.5 ml-5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="group" className="block mb-2 text-sm font-medium text-white">Select Group</label>
            <select
              id="group"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Select Group</option>
              {groups.map((group) => (
                <option key={group._id} value={group._id}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>

          <h1 className='text-white mb-3 mt-[3%]'>Bills or notes</h1>
          <div className="flex items-center justify-center w-full">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        </div>
      </div>
      <div className="w-[700px]  p-6 bg-gray-900 border-2 border-white rounded-md shadow-md">
        <header className="text-center">
          <h1 className="text-2xl text-white font-bold mb-[3%]">Select the users</h1>
        </header>

        <div className='flex ml-[5%] mt-[5%]'>
          <div
            className={`w-[200px] h-10 border-2 border-white p-1 text-center ${splitType === 'equal' ? 'bg-blue-500' : 'bg-gray-700'}`}
            onClick={() => handleSplitTypeChange('equal')}
          >
            Equal
          </div>
          <div
            className={`w-[200px] h-10 border-2 border-white p-1 text-center ${splitType === 'fixed' ? 'bg-blue-500' : 'bg-gray-700'}`}
            onClick={() => handleSplitTypeChange('fixed')}
              >
                Fixed
              </div>
            </div>
    
            <div>
              <table className="w-full mt-6 text-white">
                <thead>
                  <tr>
                    <th className="w-1/12 text-center">Select</th>
                    <th className="w-4/12 text-center">Member</th>
                    <th className="w-4/12 text-center">Amount</th>
                    <th className="w-3/12 text-center">Currency</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map((member) => (
                    <tr key={member._id} className="text-center">
                      <td>
                        <input
                          type="checkbox"
                          checked={!!splitAmounts[member._id]}
                          onChange={() => {
                            if (splitAmounts[member._id]) {
                              setSplitAmounts((prev) => {
                                const { [member._id]: _, ...rest } = prev;
                                return rest;
                              });
                            } else {
                              setSplitAmounts((prev) => ({
                                ...prev,
                                [member._id]: splitType === 'equal' ? amount / members.length : ''
                              }));
                            }
                          }}
                        />
                      </td>
                      <td>{member.name}</td>
                      <td>
                        <input
                          type="text"
                          value={splitAmounts[member._id] || ''}
                          onChange={(e) => handleMemberAmountChange(member._id, e.target.value)}
                          disabled={splitType === 'equal'}
                          className="w-full text-black p-1 rounded"
                        />
                      </td>
                      <td>INR</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    
            <div className="flex justify-between mt-6 mx-[3%]">
              <button
                className="bg-green-500 text-white py-2 px-6 rounded-lg shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                Split
              </button>
              <button
                className="bg-red-500 text-white py-2 px-6 rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                onClick={() => {
                  setCategory('');
                  setDescription('');
                  setAmount('');
                  setSelectedGroup('');
                  setMembers([]);
                  setSplitAmounts({});
                  setFile(null);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      );
    };
    
    export default GroupExpense;
    
