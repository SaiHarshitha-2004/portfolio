import React from 'react';

const Profile = () => {
  const profileData = {
    name: "Sai Harshitha Mandapalli",
    email: "saiharshithamandapalli@gmail.com",
    num : "7672044351" ,
    linkedin: {
      url: "https://www.linkedin.com/in/sai-harshitha-mandapalli-b845a9220/",
      username: "sai-harshitha-mandapalli"
    },
    github: {
      url: "https://github.com/SaiHarshitha-2004",
      username: "saiharshithamandapalli"
    },
    leetcode: {
      url: "https://leetcode.com/u/saiharshithamandapalli/",
      username: "saiharshithamandapalli"
    },
    hackerrank: {
      url: "https://www.hackerrank.com/profile/saiharshithaman1",
      username: "saiharshithaman1"
    },
    GeeksForGeeks: {
      url: "https://www.geeksforgeeks.org/user/saiharshithamandapalli/",
      username: "saiharshithamandapalli"
    },
    hackerearth: {
      url: "https://www.hackerearth.com/@mandapalli2",
      username: "@mandapalli2"
    }
  };

  return (
    <div className='flex flex-col mt-24 justify-center items-center'>
      <div className="w-2/3 bg-black bg-opacity-30 p-8 rounded-xl shadow-md">
        <h1 className="text-4xl text-rose-600 mb-4">Profile</h1>
        <div className="text-lg text-neutral-100 mb-4">
          <strong>Name:</strong> {profileData.name}
        </div>
        <div className="text-lg text-neutral-100 mb-4">
          <strong>Email:</strong> {profileData.email}
        </div>
        <div className="text-lg text-neutral-100 mb-4">
          <strong>Mobile No:</strong> {profileData.num}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          {Object.keys(profileData).map((key) => {
            if (profileData[key].url) {
              return (
                <React.Fragment key={key}>
                  <div className="flex items-center text-lg text-neutral-100">
                    <strong>{key.charAt(0).toUpperCase() + key.slice(1)}</strong>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href={profileData[key].url} target="_blank" rel="noopener noreferrer" className="text-xl text-blue-500">
                      {profileData[key].username}
                    </a>
                  </div>
                </React.Fragment>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className='mt-16 text-white'>
        made by Sai Harshitha Mandapalli 🤍
      </div>
    </div>
  );
}

export default Profile;
