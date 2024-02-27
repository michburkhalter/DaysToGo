window.onload = function () {
  init();
  var t = setInterval(init, 1000);
};

function init() {
  let target_date = new Date('2024-04-15 12:00');

  document.getElementById('weeks_to_go').innerHTML = getWeeksToDate(target_date);
  document.getElementById('days_to_go').innerHTML = getDaysToDate(target_date);
  document.getElementById('hours_to_go').innerHTML = getHoursToDate(target_date);
  document.getElementById('minutes_to_go').innerHTML = getMinutesToDate(target_date);
  document.getElementById('seconds_to_go').innerHTML = getSecondsToDate(target_date);
}

function get_delta(target_date){
  let delta = target_date - new Date();

  if ( delta < 0){
    delta = 0;
  }

  return delta
}

function getWeeksToDate(target_date) {
  let delta = get_delta(target_date)

  delta = delta / 1000 / 60 / 60 / 24 / 7;

  return delta.toFixed(1);
}

function getDaysToDate(target_date) {
  let delta = get_delta(target_date)

  delta = delta / 1000 / 60 / 60 / 24;

  return delta.toFixed(0);
}

function getHoursToDate(target_date) {
  let delta = get_delta(target_date)

  delta = delta / 1000 / 60 / 60;

  return delta.toFixed(0);
}

function getMinutesToDate(target_date) {
  let delta = get_delta(target_date)

  delta = delta / 1000 / 60;

  return delta.toFixed(0);
}

function getSecondsToDate(target_date) {
  let delta = get_delta(target_date)

  delta = delta / 1000;

  return delta.toFixed(0);
}
