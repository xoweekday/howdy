import React from 'react';
import AddToCalendar from 'react-add-to-calendar';
import moment from 'moment';

const CalendarButton = ({name, details, city, start, end, date}) => {
  const event = {
    title: name,
    description: details,
    location: city,
    startTime: `${moment(date).format('YYYY-MM-DD')}T${start}-05:00`,
    endTime: `${moment(date).format('YYYY-MM-DD')}T${end}-05:00`,
  };
  console.log(event.startTime);
  return (
    <AddToCalendar className="calendarButton" event={event} />
  );
};

export default CalendarButton;
