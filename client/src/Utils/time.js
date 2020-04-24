const moment = require('moment');


const within30Minutes = (time) => {
  // current time
  const now = moment().format("HH:mm:ss");
  // party's start time
  let startTime = moment(time, "HH:mm:ss").subtract(30, 'minutes');
  // within 30 minutes before start time

  console.log({start: time})
  console.log({ now })

  return now >= startTime;
}


const currentPartiesSorted = (parties) => {
  //create date obj from date field
  parties.forEach(obj => {
    let date = new Date(obj.date.substring(0,10));
    date.setDate(date.getDate() + 1);
    obj.date = date;
    // create integer out of 24hour time to sort with
    obj.startInt = Number(obj.start.replace(/:/g, ''));
  });

  // return only the current and future parties
  let now = new Date();
  now.setDate(now.getDate() - 1);
  parties = parties.filter(party => party.date >= now);

  // sort parties by date then time
  parties.sort((x, y) => { return x.date - y.date || x.startInt - y.startInt; });
  return parties;
}
module.exports = { within30Minutes, currentPartiesSorted };