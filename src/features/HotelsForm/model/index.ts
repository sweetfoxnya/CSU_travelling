export interface HotelsFormProps {
  cityFrom: HotelModel;
  cityTo: HotelModel;
}

export interface HotelModel {
  id: number;
  name: string;
}

export interface HotelSelectModel extends HotelModel {
  value: string;
}
