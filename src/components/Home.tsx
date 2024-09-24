// src/components/Home.tsx

import { FC } from 'react';
import PatientsList from './PatientsList';

const Home: FC = () => {
    return (
        <div>
            <h1>Welcome to the Patient Administration System</h1>
            <PatientsList />
        </div>
    );
};

export default Home;
