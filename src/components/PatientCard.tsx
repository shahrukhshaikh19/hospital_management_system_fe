// components/PatientCard.tsx

import React from 'react';

type Avatar = string; // Define a type alias for the avatar

interface Patient {
  name: string;
  id: string;
  age: number;
  address: string;
  avatar: Avatar; // Use the Avatar type alias
  meetDoctor:number;
  onMeetDoctor:  () => void;
}

const PatientCard: React.FC<Patient> = ({ name, id, age, address, avatar,meetDoctor,onMeetDoctor }) => {
  
  

   return (
    <div className="w-full bg-[#231E39] rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex flex-col items-center">
        <img
          src={`https://robohash.org/${id}?200x200`}
          alt="Patient Avatar"
          className="w-24 h-24 rounded-full mb-4 border-2 border-[#03BFCB]"
        />
        <div>
          <h2 className="text-lg font-bold text-white">Name: {name}</h2>
          <p className="text-gray-200">ID: {id}</p>
          <p className="text-gray-200">Age: {age}</p>
          <p className="text-gray-200">Address: {address}</p>
          {meetDoctor == 0 && (
            <button
              className="mt-4 bg-white text-blue-700 px-4 py-2 rounded-md hover:bg-blue-200"
              onClick={()=>onMeetDoctor(id)}
            >
              Meet Doctor
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
