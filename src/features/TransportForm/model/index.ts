export interface TransportFormProps {
  transport: TransportModel;
}

export interface TransportModel {
  id: number;
  name: string;
}

export interface TransportSelectModel {
  value: number;
  label: string;
}
