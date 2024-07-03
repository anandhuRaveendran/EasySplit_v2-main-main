import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const AddGroup = () => {
  // const navigate = useNavigate(); // Initialize useNavigate

  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState('');
  const [selectedMembersList, setSelectedMembersList] = useState([]);

  useEffect(() => {
    // Fetch friends data from API
    const fetchFriends = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/friend/getFriends');
        const data = await res.json();
        setMembers(data); // Set the fetched friends data to the state
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    };

    fetchFriends();
  }, []);

  const handleAddMember = () => {
    // Add selected member to selectedMembersList
    if (selectedMember) {
      setSelectedMembersList([...selectedMembersList, selectedMember]);
      setSelectedMember(''); // Clear the selectedMember state after adding
    }
  };

  const handleDeleteMember = (memberId) => {
    // Delete selected member from selectedMembersList
    const updatedList = selectedMembersList.filter((member) => member !== memberId);
    setSelectedMembersList(updatedList);
  };

  const handleSaveGroup = async (e) => {
    e.preventDefault(); // Prevent default form submission
    
    try {
      const groupData = {
        name: groupName,
        description: groupDescription,
        members: selectedMembersList,
        currency: currency
      };

      const res = await fetch('http://localhost:5000/api/group/addgroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupData),
      });

      if (!res.ok) {
        throw new Error('Failed to save group');
      }

      // Assuming response contains the saved group data
      const data = await res.json();
      console.log('Group saved successfully:', data);

      // Navigate to another route after saving
      // navigate('/Dashboard/groups'); // Replace '/groups' with your desired route

      // Optionally, you can reset form fields or navigate to another page
      setGroupName('');
      setGroupDescription('');
      setSelectedMembersList([]);
      setCurrency('USD');

    } catch (error) {
      console.error('Error saving group:', error);
      // Handle error (show message, log, etc.)
    }
  };

  const handleCancel = () => {
    // Implement logic to cancel group creation
    console.log("Cancel group creation");
    // You can add logic here to navigate or reset form fields
  };

  return (
    <div className='flex'>
      <form className='flex' onSubmit={handleSaveGroup}>
        <div className="w-[700px] h-[700px] ml-[5%] p-4 border rounded-lg shadow-lg text-black">
          <header className="text-center">
            <h1 className="text-5xl text-black font-bold mb-[10%]">Add New Group</h1>
          </header>
          <div className="mb-4">
            <label className="block text-xl font-medium mb-4 text-black">Group Name</label>
            <input
              type="text"
              placeholder="Enter Group Name"
              className="w-full p-2 border rounded"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-xl font-medium mb-4 text-black">Group Description (optional)</label>
            <textarea
              placeholder="Enter Group Description"
              className="w-full p-2 border rounded"
              style={{ height: '400px' }}
              value={groupDescription}
              onChange={(e) => setGroupDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="w-[700px] h-[700px] ml-[5%] p-4 border rounded-lg shadow-lg text-black">
          <div className="mb-4 mt-8">
            <div className="flex mb-2 gap-[3%]">
              <label htmlFor="members" className="block mb-2 text-xl font-medium text-black">Select Members</label>
              <select
                id="members"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5"
                value={selectedMember}
                onChange={(e) => setSelectedMember(e.target.value)}
              >
                <option value="">Select a member</option>
                {members.map((member) => (
                  <option key={member._id} value={member._id}>
                    {member.name}
                  </option>
                ))}
              </select>
              <button
                type="button" // Change type to button to prevent form submission
                className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded w-[200px]"
                onClick={handleAddMember}
              >
                Add Member
              </button>
            </div>
            <ul>
              {selectedMembersList.map((memberId) => (
                <li key={memberId} className="flex justify-between items-center mb-2">
                  <span>{members.find((member) => member._id === memberId)?.name}</span>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteMember(memberId)}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 mt-5">
            <label className="block text-l font-medium mb-4 text-white">Currency</label>
            <select
              className="w-full p-2 border rounded"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className="flex justify-between mx-7 mt-[5%] mb-[5%]">
            <button
              type="submit"
              className="p-2 bg-blue-500 hover:bg-blue-700 text-white rounded mr-2"
            >
              Save Group
            </button>
            <button
              type="button"
              className="p-2 bg-gray-300 hover:bg-gray-400 text-black rounded"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddGroup;