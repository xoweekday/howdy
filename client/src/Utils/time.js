const moment = require('moment');


const thirtyMinBeforeTodaysParty = (date, start) => {
  // current time
  const now = moment();

  // party's start time and date
  const startTime = moment(start, 'HH:mm:ss').subtract(30, 'minutes');
  const partyDate = moment(date);

  // Can join 30 minutes before start on day of the party
  return now >= startTime && partyDate.format('MMM DD, YYYY') === now.format('MMM DD, YYYY');
};


const currentPartiesSorted = (parties) => {
  // create date obj from date field
  parties.forEach((obj) => {
    const date = new Date(obj.date.substring(0,10));
    date.setDate(date.getDate() + 1);
    obj.date = date;
    // create integer out of 24hour time to sort with
    obj.startInt = Number(obj.start.replace(/:/g, ''));
  });

  // return only the current and future parties
  const now = new Date();
  parties = parties.filter((party) => party.date >= now.setHours(0, 0, 0, 0));

  // sort parties by date then time
  parties.sort((x, y) => x.date - y.date || x.startInt - y.startInt);
  return parties;
};

const formatTime = (time) => {
  return moment(time, 'HH:mm:ss').format('h:mm a');
};

const formatDate = (date) => {
  return moment(date).format('MMM DD, YYYY');
};

module.exports = {
  thirtyMinBeforeTodaysParty, currentPartiesSorted, formatTime, formatDate,
};
