import Company from "./companies.model";
import Contact from "./contacts.model";

export interface Location2 {
  text: string;
  area_2_short?: string;
  city?: string;
  area_1_short?: string;
  area_2?: string;
  area_1?: string;
  place_id?: string;
  url?: string;
  city_short?: string;
  country?: string;
  country_short?: string;
}

export interface Location {
  location: Location2;
}

export interface Urls {
  ad: string;
  apply: string;
}

export interface Video {
  content?: any;
  url: string;
}

export interface Owner {
  id: number;
  name: string;
  email: string;
}
interface JobsModel {
  id: number;
  benefits: any[];
  categories: any[];
  company: Company;
  contact: Contact;
  departments: any[];
  descr: string;
  employment_type: string;
  experience: string;
  from_date: string;
  function: string;
  language: string;
  layers_1: any[];
  layers_2: any[];
  layers_3: any[];
  layers_4: any[];
  layers_5: any[];
  linkedInCompanyId?: number | null;
  locations: Location[];
  slug: string;
  title: string;
  to_date?: any;
  urls: Urls;
  video: Video;
  internal_reference?: any;
  owner: Owner;
  skills: string;
}

export default JobsModel;
