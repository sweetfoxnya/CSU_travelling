export interface HotelsFormProps {
  hotel: HotelModel;
}

export interface HotelModel {
  id: number;
  name: string;
}

export interface HotelSelectModel {
  value: number;
  label: string;
}
