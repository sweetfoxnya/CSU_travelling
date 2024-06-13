import {TransportModel} from "../model";

export const mapCitiesToSelect = (transports: TransportModel[]) => transports.map((t) => ({
  value: t.id,
  label: t.name
}))
