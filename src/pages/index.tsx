import Image from "next/image";
import { Inter } from "next/font/google";
import PatientCard from '../components/PatientCard';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const patients = [
    {
      id: '1',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '4',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '5',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '6',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '7',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '8',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '9',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '10',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '11',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '12',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '13',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '14',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    {
      id: '15',
      name: 'John Doe',
      age: 35,
      address: '123 Main St, Anytown',
      avatar: 'https://via.placeholder.com/150',
    },
    // Add more patient data as needed
    // ...
  ];
  return (
    <div className="container mx-auto py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {patients.map(patient => (
        <PatientCard key={patient.id} {...patient} />
      ))}
    </div>
  );
}
