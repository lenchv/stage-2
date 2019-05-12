const isDateInThePast = date => {
  console.log(date, (new Date(date)).getTime(), (new Date()).getTime());
  return date && ((new Date(date)).getTime() <= (new Date()).getTime());
}

export default isDateInThePast;