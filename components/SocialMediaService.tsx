import React from 'react';
import { ServicePage } from './services/ServicePage';
import { socialMediaServiceData } from './services/serviceData';

export const SocialMediaService: React.FC = () => <ServicePage data={socialMediaServiceData} />;
