// src/components/PatientsList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Patient {
  id: number;
  name: string;
  age: number;
  condition: string;
}

const PatientsList: React.FC = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios.get<Patient[]>('http://localhost:5272/api/patients')
      .then(response => setPatients(response.data))
      .catch(err => {
        console.error('Failed to fetch patients', err);
        setError('Failed to load patients. Please try again later.');
      });
  }, []);

  return (
    <div>
      <h2>Patients List</h2>
      {error ? <p>{error}</p> : (
        <ul>
          {patients.map(patient => (
            <li key={patient.id}>{patient.name} - {patient.age} - {patient.condition}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PatientsList;
