export type ServiceItemModel = {
  id: string;
  name: string;
  btnText: string;
};
export type ServiceModel = {
  type: string;
  name: string;
  items: Array<ServiceItemModel>;
  isReverse: boolean;
};

export type PacketModel = {
  id?: string;
  name: string;
  message: string;
  price: number;
  symbol: string;
  pay: string;
  isActive?: boolean;
};
