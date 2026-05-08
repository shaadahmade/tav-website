import React from 'react';
import { ServicePage } from './services/ServicePage';
import { contentMarketingData } from './services/serviceData';

export const ContentMarketingService: React.FC = () => <ServicePage data={contentMarketingData} />;
