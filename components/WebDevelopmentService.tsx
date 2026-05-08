import React from 'react';
import { ServicePage } from './services/ServicePage';
import { webDevelopmentData } from './services/serviceData';

export const WebDevelopmentService: React.FC = () => <ServicePage data={webDevelopmentData} />;
