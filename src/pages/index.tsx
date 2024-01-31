import Image from "next/image";
import { Inter } from "next/font/google";
import PatientCard from '../components/PatientCard';
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [patientsData,setPatientssData] = useState([]);
  const apiUrl = "http://localhost:5000";
  useEffect(()=>{
    const fetchPatientsData=async()=>{
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const totalPatients = await  response.json();
        setPatientssData(totalPatients.patients)
      } catch (error) {
        console.log(error);
      }
    }
    fetchPatientsData();
  },[]);

const onMeetDoctor= async(id)=>{
  console.log(id)
  const postData = {id:id};
  const response = await fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Add any other headers required by your API
    },
    body: JSON.stringify(postData),
  })
  const updatetedData = await response.json();
  setPatientssData(updatetedData.patients)
  console.log(updatetedData);
};
  
  return (
    <div className="container mx-auto p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {patientsData?.map((patient,i) => (
        <PatientCard key={patient.id} {...patient} meetDoctor={i} onMeetDoctor={onMeetDoctor} />
      ))}
    </div>
  );
}
