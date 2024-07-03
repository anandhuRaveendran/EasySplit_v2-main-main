import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/friend/getFriends');
        const data = await res.json();
        setFriends(data);
      } catch (error) {
        console.error("Error fetching friends:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFriends();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/friend/deleteFriend/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        console.log("Friend deleted successfully");
        // Update the friends list after deletion
        setFriends(friends.filter(friend => friend._id !== id));
      } else {
        console.error("Failed to delete friend");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-black">
      <div className='flex justify-between'>
        <h1 className="text-4xl text-black font-bold mt-[5%] mb-[8%]">Friend List</h1>
        <Link to={'/Dashboard/addfriend'}>
          <h1 className="text-3xl text-black font-bold mt-[5%] mb-[8%]">Add New Friend</h1>
        </Link>
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="w-[1300px] ml-[-25%] bg-white border rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-2 text-left">Name</th>
              <th className="py-2 px-4 border-2 text-left">Upi Id</th>
              <th className="py-2 px-4 border-2 text-left">Email ID</th>
              <th className="py-2 px-4 border-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {friends.map((friend) => (
              <tr key={friend._id}>
                <td className="py-2 px-4 border-2">
                  <Link to={`/dashboard/friendprofile/${friend._id}`}>
                    {friend.name}
                  </Link>
                </td>
                <td className="py-2 px-4 border-2">{friend.upi}</td>
                <td className="py-2 px-4 border-2">{friend.email}</td>
                <td className="py-2 px-4 border-2">
                  <Link to={`/Dashboard/updateFriend/${friend._id}`}>
                    <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(friend._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default FriendsList;
