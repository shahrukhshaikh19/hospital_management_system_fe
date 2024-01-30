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


  
  return (
    <div className="container mx-auto py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {patientsData?.map(patient => (
        <PatientCard key={patient.id} {...patient} />
      ))}
    </div>
  );
}
