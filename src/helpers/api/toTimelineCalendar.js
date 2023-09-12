import replaceAll from "helpers/replaceAll";
import { legendColors } from "../../constants";
import TimelinePopover from "components/schedules/components/timeline-popover";

const { PRIMARY, SUCCESS, DANGER, WARNING } = legendColors;

export const toTimeline = (
  start, 
  end, 
  title, 
  color, 
  type,
  data,
  renderPopover,
  onEdit
  ) => {
  return {
    start,
    end,
    title,
    color,
    type,
    data,
    renderPopover,
    onEdit
  }
};

export const toTimelineGroup = (groupName, timelines) => {
  return {
    name: groupName,
    timelines
  }
}

export const truckEventToTimeline = (truckEvent = {}) => {
  const { eventDate, event, onEdit } = truckEvent;
  return toTimeline(
    eventDate, 
    eventDate, 
    event, 
    PRIMARY, 
    'event',
    truckEvent,
    TimelinePopover,
    onEdit
    )
}

export const truckScheduleToTimeline = (schedule = {}) => {
  const {
    startDate,
    endDate,
    reason,
    availability,
    route: { routeName } = {},
    onEdit
  } = schedule;
  let color = availability === 'available' ? SUCCESS : DANGER;
  if (reason === 'planned_maintenance') {
    color = WARNING
  }
  return toTimeline(
    startDate,
    endDate,
    replaceAll(reason, '_', ' ') || routeName,
    color,
    'schedule',
    schedule,
    TimelinePopover,
    onEdit
    );
}

export const truckToTimelineCalendar = (truck = {}) => {
  const { fleetNumber, eventTruck, schedules, id, onEdit } = truck;
  const timelines = [
    ...eventTruck.map((event) => truckEventToTimeline({
      ...event,
      truckId: id,
      onEdit
    })),
    ...schedules.map((schedule) => truckScheduleToTimeline({
      ...schedule,
      truckId: id,
      onEdit
    }))
  ]
  return toTimelineGroup(fleetNumber, timelines)
};

export const trucksToTimelineCalendar = (trucks = [], onEdit) => {
  try {
    return trucks.map((truck) => truckToTimelineCalendar({
      ...truck,
      onEdit
    }))
  } catch(error) {
    return []
  }
};
