export interface CityFormProps {
  cityFrom: CityModel;
  cityTo: CityModel;
}

export interface CityModel {
  id: number;
  city: string;
}

export interface CitySelectModel {
  value: number;
  label: string;
}
