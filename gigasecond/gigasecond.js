


// console.log("newDate: ", newDate);
// console.log(new Date(Date.UTC(2011, 3, 25)));
export const gigasecond = (moment) => {
  return new Date(moment.getTime() + 1000000000*1000);
};
