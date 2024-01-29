// components/PatientCard.tsx

import React from 'react';

type Avatar = string; // Define a type alias for the avatar

interface Patient {
  name: string;
  id: string;
  age: number;
  address: string;
  avatar: Avatar; // Use the Avatar type alias
}

const PatientCard: React.FC<Patient> = ({ name, id, age, address, avatar }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1">
      <div className="flex items-center">
        <img src={`https://robohash.org/${id}?200x200`} alt="Patient Avatar" className="w-12 h-12 rounded-full mr-4 border-2 border-black" />
        <div>
          <h2 className="text-lg font-bold text-gray-600">{name}</h2>
          <p className="text-gray-600">ID: {id}</p>
          <p className="text-gray-600">Age: {age}</p>
          <p className="text-gray-600">Address: {address}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
