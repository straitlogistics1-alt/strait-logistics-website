export interface ContactInfo {
  phone: string[];
  mobile: string[];
  email: string[];
  address: {
    lines: string[];
    city: string;
    state: string;
    postalCode: string;
    country: string;
    mapUrl: string;
  };
}

export interface CompanyStat {
  value: string;
  label: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features?: string[];
}

export interface Industry {
  id: string;
  name: string;
}

export interface Commodity {
  id: string;
  name: string;
}

export interface Client {
  id: string;
  name: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}