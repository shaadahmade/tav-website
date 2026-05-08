import React from 'react';
import { ServicePage } from './services/ServicePage';
import { performanceMarketingData } from './services/serviceData';

export const PerformanceMarketingService: React.FC = () => <ServicePage data={performanceMarketingData} />;
