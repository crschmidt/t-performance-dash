import { stations } from './constants';

const all_lines = () => {
  return Object.keys(stations);
};

const lookup_station_by_id = (line, id) => {
  if (line === "" || line === undefined || id === "" || id === undefined) {
    return undefined;
  }

  return stations[line].stations.find(x => [...x.stops["0"] || [], ...x.stops["1"] || []].includes(id));
};

const options_station = (line) => {
  if (!line) {
    return [];
  }
  return stations[line].stations;
};

const station_direction = (from, to, line) => {
  if (from.order === to.order) {
    return "";
  }
  return from.order > to.order ? stations[line].direction["0"] : stations[line].direction["1"];
}

const get_stop_ids_for_stations = (from, to) => {
  if (!from || !to) {
    return { fromStopId: null, toStopId: null };
  }
  const isDirection1 = from.order < to.order;
  return {
    fromStopIds: isDirection1 ? from.stops["1"] : from.stops["0"],
    toStopIds: isDirection1 ? to.stops["1"] : to.stops["0"],
  }
}

export {
  all_lines,
  options_station,
  station_direction,
  lookup_station_by_id,
  get_stop_ids_for_stations,
};
