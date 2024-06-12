export interface CityFormProps {
  cityFrom: CityModel;
  cityTo: CityModel;
}

export interface CityModel {
  id: number;
  city: string;
}

export interface CitySelectModel extends CityModel {
  value: string;
}
