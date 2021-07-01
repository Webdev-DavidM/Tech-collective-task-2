import { daysUntil } from './daysUntil';

export const formatData = (data) => {
   return data.map((item) => {
      let noOfDays = Math.ceil(daysUntil(item.date));
      return `${noOfDays} days until ${item.day}`;
   });
};
