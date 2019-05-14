const isDateInThePast = date => date && ((new Date(date)).getTime() <= (new Date()).getTime());

export default isDateInThePast;