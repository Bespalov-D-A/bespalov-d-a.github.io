export interface ImockDataTeamItem {
  id: number;
  name: string;
  email: string;
  age: number;
  phone: string;
  access: string;
}

export type ImockDataTeam = ImockDataTeamItem[];

export interface ImockDataContactsItem
  extends Omit<ImockDataTeamItem, 'access'> {
  address: string;
  city: string;
  zipCode: string;
  registrarId: number;
}

export type ImockDataContacts = ImockDataContactsItem[];

export interface ImockDataInvoicesItem {
  id: number;
  name: string;
  email: string;
  cost: string;
  phone: string;
  date: string;
}

export type ImockDataInvoices = ImockDataInvoicesItem[];

export interface ImockTransactionsItem {
  txId: string;
  user: string;
  date: string;
  cost: string;
}

export type ImockTransactions = ImockTransactionsItem[];

export interface ImockBarDataItem {
  [key: string]: string | number;
  country: string;
  'hot dog': number;
  'hot dogColor': string;
  burger: number;
  burgerColor: string;
  kebab: number;
  kebabColor: string;
  donut: number;
  donutColor: string;
}

export type ImockBarData = ImockBarDataItem[];

export interface ImockPieDataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

export type ImockPieData = ImockPieDataItem[];

export interface Ipoint {
  x: string;
  y: number;
}

export interface ImockLineDataItem {
  id: string;
  color: string;
  data: Ipoint[];
}

export type ImockLineDate = ImockLineDataItem[];

export interface ImockGeographDataItem {
  id: string;
  value: number;
}

export type ImockGeographData = ImockGeographDataItem[];

export interface IfeatureItem {
  type: string;
  properties: {
    name: string;
    [key: string]: string;
  };
  geometry: {
    type: string;
    coordinates: number[][][] | number[][][][];
  };
  id: string;
}

export type Ifeatures = IfeatureItem[];

export interface IgeoFeatures {
  type: string;
  features: Ifeatures;
}
