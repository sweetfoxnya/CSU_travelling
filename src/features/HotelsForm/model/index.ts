export interface HotelsFormProps {
  cityFrom: HotelModel;
  cityTo: HotelModel;
}

export interface HotelModel {
  id: number;
  name: string;
}

export interface HotelSelectModel {
  value: number;
  label: string;
}
