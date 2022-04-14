import React from 'react';
import { ServiceItemModel } from 'types/home';
import {
  assets,
  accounting,
  hrAdmin,
  sales,
  customer,
  security,
} from 'assets/images';

const ServiceItemLeft = ({
  type,
  name,
  items,
}: {
  type: string;
  name: string;
  items: Array<ServiceItemModel>;
}) => {
  const images = {
    assets,
    accounting,
    hrAdmin,
    sales,
    customer,
    security,
  };
  return (
    <div className="service-item">
      <div className="container-inner">
        <div className="row">
          <div className="col-md-6 col-sm-12 col-xs-12">
            <img className="img-responsive" src={images[type]} alt={name} />
          </div>
          <div className="col-md-6 col-sm-12 col-xs-12 service-item__inner">
            <div className="service-item__meta">
              <div className="service-item__title">{name}</div>
              <ul>
                {items.map(item => (
                  <li key={item.id}>
                    <div
                      className="service-item__name"
                      dangerouslySetInnerHTML={{ __html: item.name }}
                    />
                    <button>{item.btnText}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItemLeft;
