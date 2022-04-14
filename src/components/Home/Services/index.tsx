import React from 'react';
import { ServiceModel } from 'types/home';
import ServiceItemLeft from './ServiceItemLeft';
import ServiceItemRight from './ServiceItemRigth';

const ServiceItem = ({ type, name, items, isReverse }: ServiceModel) => (
  <>
    {!isReverse ? (
      <ServiceItemLeft type={type} name={name} items={items} />
    ) : (
      <ServiceItemRight type={type} name={name} items={items} />
    )}
  </>
);

export default ServiceItem;
