import React from 'react';
import { ServicePage } from './services/ServicePage';
import { appDevelopmentData } from './services/serviceData';

export const AppDevelopmentService: React.FC = () => <ServicePage data={appDevelopmentData} />;
