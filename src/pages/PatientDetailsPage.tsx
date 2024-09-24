import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientById } from '../services/patientSearchService';

const PatientDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [patient, setPatient] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPatient = async () => {
      try {
        const data = await fetchPatientById(id);
        setPatient(data);
      } catch (error) {
        setError('Failed to load patient details');
      } finally {
        setLoading(false);
      }
    };

    loadPatient();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Patient Details</h1>
      <p>ID: {patient.id}</p>
      <p>Name: {patient.name}</p>
      <p>Date of Birth: {patient.dob}</p>
    </div>
  );
};

export default PatientDetailsPage;
