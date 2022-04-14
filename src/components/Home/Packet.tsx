import React, { useState } from 'react';
import classnames from 'classnames';
import { PacketModel } from 'types/home';
import { formatNumber } from 'utils/utils';

const Packet = ({ packets }) => {
  const [currentPacket, setCurrentpacket] = useState<any>(null);
  return (
    <div className="packet">
      <div className="packet__container">
        <div className="row">
          {packets.map((packet: PacketModel) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div
                className={classnames('packet__block', {
                  active: currentPacket?.id === packet.id,
                })}
                onClick={() => setCurrentpacket(packet)}
              >
                <div className="packet__name">{packet.name}</div>
                <div className="packet__message">{packet.message}</div>
                <div className="packet__info">
                  <div className="packet__price">
                    {formatNumber(packet.price)}
                  </div>
                  <div className="packet__meta">
                    <div className="packet__symbol">{packet.symbol}</div>
                    <div className="packet__pay">{packet.pay}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packet;
