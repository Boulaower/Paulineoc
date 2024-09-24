// src/services/patientSearchService.ts

interface Visit {
  visitId: number;
  visitDate: string;
  details: string;
}

// Assuming the API returns an array of visits or throws an error
export const fetchPatientVisits = (patientId: number): Promise<Visit[]> => {
  return fetch(`http://localhost:5272/api/patients/${patientId}/visits`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch visits');
      }
      return response.json();
    });
};
