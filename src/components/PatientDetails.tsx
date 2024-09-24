import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPatientVisits } from '../services/patientSearchService';

interface Visit {
    visitId: number;
    visitDate: string;
    details: string;
}

const PatientDetails: React.FC = () => {
    const { id } = useParams<{ id?: string }>();
    const [visits, setVisits] = useState<Visit[]>([]);

    useEffect(() => {
        if (id) {
            const numericId = parseInt(id, 10);
            if (!isNaN(numericId)) {
                fetchPatientVisits(numericId)
                    .then((data: Visit[]) => setVisits(data)) // Ensure data is of type Visit[]
                    .catch((error: Error) => console.error('Fetching patient visits failed', error.message)); // Access error.message if error is of type Error
            }
        }
    }, [id]);

    return (
        <div>
            <h1>Patient Visits</h1>
            {visits.length > 0 ? (
                <ul>
                    {visits.map((visit) => (
                        <li key={visit.visitId}>
                            {visit.visitDate} - {visit.details}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No visits found for this patient.</p>
            )}
        </div>
    );
};

export default PatientDetails;
