import {TransportModel} from "../model";

export const mapCitiesToSelect = (transports: TransportModel[]) => transports.map((t) => ({
  ...t,
  value: t.name
}))
