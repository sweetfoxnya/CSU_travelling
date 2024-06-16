export interface EventsFormProps {
  events: EventModel[];
}

export interface EventModel {
  id: number;
  name: string;
}

export interface EventSelectModel {
  value: number;
  label: string;
}
