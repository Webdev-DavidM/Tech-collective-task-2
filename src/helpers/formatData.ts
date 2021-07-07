import { daysUntil } from './daysUntil';
import { IDateInfoObj } from '../interfaces';

export const formatData = (data: Array<IDateInfoObj>): string[] => {
   return data.map((item) => {
      let noOfDays = Math.ceil(daysUntil(item.date));
      return `${noOfDays} days until ${item.day}`;
   });
};
