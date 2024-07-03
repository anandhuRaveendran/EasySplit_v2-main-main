import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const GroupList = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/group/getgroups');
        const data = await res.json();
        setGroups(data);
      } catch (error) {
        console.error("Error fetching groups:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/group/deletegroup/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        console.log("Group deleted successfully");
        // Update the groups list after deletion
        setGroups(groups.filter(group => group._id !== id));
      } else {
        console.error("Failed to delete group");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 text-black">
      <div className='flex justify-between'>
      <h1 className="text-5xl text-black text-center font-bold mb-[10%] mt-[5%] ml-[-10%]">Group List</h1>
     {/* <Link to={'Dashboard/groups'}> */}
     {/* <h1 className="text-2xl text-black text-center font-bold  mt-[10%] ">Add Group</h1></Link> */}
      </div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <table className="w-[1400px] ml-[-30%] bg-white border rounded-lg shadow-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">Group Name</th>
              <th className="py-2 px-4 border-b text-left">Description</th>
              <th className="py-2 px-4 border-b text-left">Members</th>
              <th className="py-2 px-4 border-b text-left">Currency</th>
              <th className="py-2 px-4 border-b text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {groups.map((group) => (
              <tr key={group._id}>
                <td className="py-2 px-4 border-b">{group.name}</td>
                <td className="py-2 px-4 border-b">{group.description}</td>
                <td className="py-2 px-4 border-b">
                  {group.members.map(member => member.name).join(', ')}
                </td>
                <td className="py-2 px-4 border-b">{group.currency}</td>
                <td className="py-2 px-4 border-b">
                  <Link to={`/dashboard/updategroup/${group._id}`}>
                    <button className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                      Update
                    </button>
                  </Link>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleDelete(group._id)}
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

export default GroupList;
