import userSix from '../photo.jpg';

const Profile = () => {
  return (
    <div className='text-black'>
      <h1 className="text-4xl text-center mt-8">My Profile</h1>
      <div className="flex justify-center mt-8">
        <img
          className="rounded-full w-60 h-60"
          src={userSix}
          alt="Profile"
        />
      </div>
      <h2 className="text-3xl mt-6 mb-3 underline text-center">About Me</h2>
      <p className="text-lg mx-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cumque recusandae error, sed eligendi fugiat provident, iure possimus voluptatum reiciendis, blanditiis pariatur? Rerum officiis voluptas maiores necessitatibus consequatur eveniet iusto? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate repudiandae eaque unde? Quisquam repudiandae impedit eum ipsa, libero animi vel atque est quae dolores, natus sequi, ab molestiae pariatur eligendi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, eveniet? Corrupti sit molestiae iusto sapiente ex! Laudantium at tempora quaerat distinctio deserunt numquam neque, harum officiis nulla dolorum earum eaque.
      </p>
    </div>
  );
};

export default Profile;
