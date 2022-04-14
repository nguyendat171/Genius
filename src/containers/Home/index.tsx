import React from 'react';
import { services, packets } from 'contants/home';
import { Gallery, ServiceItem, Packet } from 'components/Home';

const Home = () => {
  return (
    <div className="home-page">
      <Gallery />
      <div className="home-page__notice">
        You are now viewing an <strong>IT Software</strong> that has been
        verified by <strong> over 1 million users.</strong>
      </div>
      <div className="home-page__title">IT CLOUD SEA’S IT SERVICE</div>
      {services.map(service => (
        <ServiceItem
          key={service.id}
          type={service.type}
          name={service.name}
          items={service.items}
          isReverse={service.isReverse}
        />
      ))}
      <Packet packets={packets} />
    </div>
  );
};

export default Home;
