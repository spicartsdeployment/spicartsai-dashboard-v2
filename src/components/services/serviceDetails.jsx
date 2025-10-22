import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();

  return (
    <div>
      <h2>Service Details</h2>
      <p>You are viewing details for Service {serviceId}</p>
    </div>
  );
};

export default ServiceDetails;
